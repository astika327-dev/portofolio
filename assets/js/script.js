(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links){
    let focusableMenuItems = [];
    const collectFocusable = () => {
      const selectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const elements = Array.from(links.querySelectorAll(selectors));
      if (!elements.includes(toggle)) elements.push(toggle);
      focusableMenuItems = elements.filter(el => !el.hasAttribute('disabled'));
    };

    const openMenu = () => {
      links.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      links.setAttribute('aria-modal', 'true');
      collectFocusable();
    };

    const closeMenu = () => {
      if (!links.classList.contains('open')) return;
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      links.removeAttribute('aria-modal');
      focusableMenuItems = [];
      toggle.focus();
    };

    toggle.addEventListener('click', () => {
      if (links.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    links.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', () => {
        if (links.classList.contains('open')) closeMenu();
      });
    });

    document.addEventListener('keydown', event => {
      if (!links.classList.contains('open')) return;

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
      if (!links.classList.contains('open')) return;
      if (event.target instanceof Node && (links.contains(event.target) || toggle.contains(event.target))) return;
      closeMenu();
    });
  }

  document.querySelectorAll('[data-print]').forEach(btn=>btn.addEventListener('click',()=>window.print()));
  document.querySelectorAll('[data-share]').forEach(btn=>btn.addEventListener('click',async()=>{
    const data = { title: document.title, url: location.href };
    try{ if(navigator.share){ await navigator.share(data); } else { await navigator.clipboard.writeText(location.href); alert('Link copied to clipboard'); } }
    catch(e){ console.warn(e); }
  }));
})();
