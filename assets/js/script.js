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

  (() => {
    const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
    if (!navLinks.length) return;

    const header = document.querySelector('.header');
    const headerOffset = header ? header.offsetHeight + 12 : 70;
    const linkById = new Map(navLinks.map(link => [link.getAttribute('href').slice(1), link]));
    const sections = Array.from(document.querySelectorAll('main section[id]')).filter(section => linkById.has(section.id));
    let activeId = null;

    const setActive = id => {
      const nextId = linkById.has(id) ? id : null;
      if (activeId === nextId) return;
      activeId = nextId;
      navLinks.forEach(link => link.removeAttribute('aria-current'));
      if (nextId) linkById.get(nextId)?.setAttribute('aria-current', 'true');
    };

    const clearIfAboveFirst = () => {
      if (!sections.length) return false;
      if (window.scrollY + headerOffset < sections[0].offsetTop) {
        setActive(null);
        return true;
      }
      return false;
    };

    const fallbackSelection = () => {
      if (!sections.length || clearIfAboveFirst()) return;
      const reference = window.scrollY + headerOffset;
      let currentId = sections[0].id;
      sections.forEach(section => {
        if (reference >= section.offsetTop) currentId = section.id;
      });
      setActive(currentId);
    };

    navLinks.forEach(link => {
      link.addEventListener('click', () => setActive(link.getAttribute('href').slice(1)));
    });

    if ('IntersectionObserver' in window && sections.length) {
      const visibleSections = new Map();
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });
        if (visibleSections.size) {
          const [id] = Array.from(visibleSections.entries()).sort((a, b) => b[1] - a[1])[0];
          setActive(id);
        } else {
          fallbackSelection();
        }
      }, { rootMargin: `-${headerOffset}px 0px -45% 0px`, threshold: [0.1, 0.25, 0.5, 0.75] });
      sections.forEach(section => observer.observe(section));
      window.addEventListener('scroll', () => {
        if (!visibleSections.size) fallbackSelection();
      }, { passive: true });
      fallbackSelection();
    } else {
      window.addEventListener('scroll', fallbackSelection, { passive: true });
      fallbackSelection();
    }

    const hashId = location.hash.slice(1);
    if (linkById.has(hashId)) setActive(hashId);
  })();

  document.querySelectorAll('[data-print]').forEach(btn=>btn.addEventListener('click',()=>window.print()));
  document.querySelectorAll('[data-share]').forEach(btn=>btn.addEventListener('click',async()=>{
    const data = { title: document.title, url: location.href };
    try{ if(navigator.share){ await navigator.share(data); } else { await navigator.clipboard.writeText(location.href); alert('Link copied to clipboard'); } }
    catch(e){ console.warn(e); }
  }));
})();
