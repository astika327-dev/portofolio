(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links){
    const closeMenu = () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    links.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', () => {
        if (links.classList.contains('open')) closeMenu();
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && links.classList.contains('open')) closeMenu();
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
