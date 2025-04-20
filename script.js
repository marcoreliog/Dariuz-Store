
window.addEventListener('DOMContentLoaded', () => {
    const navbar    = document.querySelector('.navbar');
    const menuToggle= document.querySelector('.navbar-toggler');
    const navMenu   = document.getElementById('navMenu');
    const navLinks  = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');
    const sections  = document.querySelectorAll('section[id]');
  
   
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
  
      
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  
     
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - navbar.offsetHeight - 10;
        if (window.scrollY >= top) current = sec.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.hash === `#${current}`);
      });
    });
  
    
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if (!target) return;
        window.scrollTo({ top: target.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
  

        if (navMenu.classList.contains('open')) navMenu.classList.remove('open');
      });
    });
  

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  });
  