
(function(){
  const btn = document.querySelector('[data-nav-toggle]');
  const menu = document.getElementById('site-menu');
  if(!btn || !menu) return;
  btn.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open', !expanded);
  });
  menu.addEventListener('click', function(e){
    if(e.target.matches('a')){
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    }
  });
})();
