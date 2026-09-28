// Progressive enhancement: navigation, project links, and notebook entries work without JS.
export {};
const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#main-nav');
const mobile = window.matchMedia('(max-width: 620px)');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (menuButton && navigation) {
  document.documentElement.classList.add('nav-ready');
  const setMenu = (open: boolean, returnFocus = false) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('is-open', open);
    if (returnFocus) menuButton.focus();
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!(event.target as Element).closest('.site-header')) setMenu(false);
  });
  mobile.addEventListener('change', () => setMenu(false));
}

if (!motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px 40px 0px' });
  document.querySelectorAll<HTMLElement>('.reveal').forEach(element => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('reveal-ready');
      observer.observe(element);
    }
  });
  motion.addEventListener('change', event => {
    if (event.matches) {
      observer.disconnect();
      document.querySelectorAll('.reveal-ready').forEach(element => element.classList.add('is-visible'));
    }
  });
}

const copyButton = document.querySelector<HTMLButtonElement>('#copy-contact');
const copyStatus = document.querySelector<HTMLElement>('#copy-status');
if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const value = copyButton.dataset.copy;
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      copyStatus.textContent = value.includes('@') ? 'Email copied. Say hello whenever you like.' : 'Profile link copied. Thanks for stopping by!';
    } catch {
      copyStatus.textContent = `Couldn't copy automatically. You can copy this: ${value}`;
    }
  });
}

const playToolbar = document.querySelector<HTMLElement>('.play-toolbar');
const board = document.querySelector<HTMLElement>('.playground-board');
if (playToolbar && board) {
  playToolbar.hidden = false;
  const filters = [...playToolbar.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const cards = [...board.querySelectorAll<HTMLDetailsElement>('.play-card')];
  const status = document.querySelector<HTMLElement>('#play-status');
  filters.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filters.forEach(other => {
        const selected = other === button;
        other.setAttribute('aria-pressed', String(selected));
        other.classList.toggle('active', selected);
      });
      cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
      board.classList.toggle('is-filtered', filter !== 'all');
      if (status) status.textContent = `${cards.filter(card => !card.hidden).length} notebook entries shown.`;
    });
  });
  document.querySelector('#shuffle-desk')?.addEventListener('click', () => {
    const order = [...board.querySelectorAll<HTMLDetailsElement>('.play-card:not([hidden])')];
    if (order.length < 2) return;
    // Move a randomly selected card to the front, ensuring a changed order each time.
    const chosen = order.splice(1 + Math.floor(Math.random() * (order.length - 1)), 1)[0];
    order.unshift(chosen);
    order.forEach((card, index) => {
      board.append(card);
      const tilt = (index % 2 ? 1 : -1) * (2 + Math.floor(Math.random() * 4));
      card.style.setProperty('--tilt', `${tilt}deg`);
      if (!motion.matches && !card.hidden) {
        card.animate([{ opacity: .6, translate: '0 8px' }, { opacity: 1, translate: '0 0' }], {
          duration: 300, easing: 'cubic-bezier(.22,1,.36,1)',
        });
      }
    });
    if (status) status.textContent = 'Desk shuffled. Same ideas, a fresh arrangement.';
  });
}
