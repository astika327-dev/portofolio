(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const bodyPage = document.body.dataset.page;
  if (bodyPage) {
    document.querySelectorAll('[data-page-link]').forEach(link => {
      const pages = (link.dataset.pageLink || '').split(/\s+/).filter(Boolean);
      if (pages.includes(bodyPage)) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (toggle && menu) {
    let focusableMenuItems = [];

    const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const collectFocusable = () => {
      const items = Array.from(menu.querySelectorAll(focusableSelectors));
      if (!items.includes(toggle)) items.push(toggle);
      focusableMenuItems = items.filter(el => !el.hasAttribute('disabled'));
    };

    const openMenu = () => {
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      menu.setAttribute('data-open', 'true');
      collectFocusable();
      if (focusableMenuItems.length) focusableMenuItems[0].focus();
    };

    const closeMenu = () => {
      if (!menu.classList.contains('open')) return;
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.removeAttribute('data-open');
      focusableMenuItems = [];
      toggle.focus();
    };

    toggle.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', () => {
        if (menu.classList.contains('open')) closeMenu();
      });
    });

    document.addEventListener('keydown', event => {
      if (!menu.classList.contains('open')) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== 'Tab' || focusableMenuItems.length === 0) return;

      const first = focusableMenuItems[0];
      const last = focusableMenuItems[focusableMenuItems.length - 1];
      const active = document.activeElement;

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      }
    });

    document.addEventListener('click', event => {
      if (!menu.classList.contains('open')) return;
      if (event.target instanceof Node && (menu.contains(event.target) || toggle.contains(event.target))) return;
      closeMenu();
    });
  }

  document.querySelectorAll('[data-print]').forEach(btn => {
    btn.addEventListener('click', () => window.print());
  });

  document.querySelectorAll('[data-share]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const data = { title: document.title, url: location.href };
      try {
        if (navigator.share) {
          await navigator.share(data);
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(location.href);
          alert('Link copied to clipboard');
        }
      } catch (error) {
        console.warn(error);
      }
    });
  });
})();
