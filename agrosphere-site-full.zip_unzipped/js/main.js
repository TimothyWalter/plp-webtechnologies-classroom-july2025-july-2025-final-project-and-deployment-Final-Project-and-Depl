(function(){
  document.querySelectorAll('[id^="year"]').forEach(el=>el.textContent = new Date().getFullYear());
  function attachToggle(toggleId, navId){
    const t=document.getElementById(toggleId);
    const n=document.getElementById(navId);
    if(!t||!n) return;
    t.addEventListener('click', ()=> n.classList.toggle('open'));
  }
  attachToggle('navToggle','primaryNav');
  attachToggle('navToggleAbout','primaryNavAbout');
  attachToggle('navToggleServices','primaryNavServices');
  attachToggle('navToggleContact','primaryNavContact');
  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name=document.getElementById('name');
      const email=document.getElementById('email');
      const message=document.getElementById('message');
      const consent=document.getElementById('consent');
      const msgEl=document.getElementById('formMsg');
      msgEl.textContent='';
      if(!name.value.trim()||!email.value.trim()||!message.value.trim()){
        msgEl.textContent='Please fill in the required fields.'; msgEl.style.color='crimson'; return;
      }
      if(!consent.checked){ msgEl.textContent='Please agree to be contacted.'; msgEl.style.color='crimson'; return; }
      msgEl.textContent='Thanks! Your message was sent (simulated).'; msgEl.style.color='green';
      form.reset();
    });
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, {threshold:0.12});
  document.querySelectorAll('[data-animate]').forEach(el=>io.observe(el));
})();