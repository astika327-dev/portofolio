(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links){
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-print]').forEach(btn=>btn.addEventListener('click',()=>window.print()));
  document.querySelectorAll('[data-share]').forEach(btn=>btn.addEventListener('click',async()=>{
    const data = { title: document.title, url: location.href };
    try{ if(navigator.share){ await navigator.share(data); } else { await navigator.clipboard.writeText(location.href); alert('Link copied to clipboard'); } }
    catch(e){ console.warn(e); }
  }));
})();