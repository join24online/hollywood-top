// NAV MENU TOGGLE
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');

    if (navMenu.classList.contains('open')) {
      navMenu.style.display = 'flex';
    } else {
      navMenu.style.display = '';
    }
  });
}


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {

    const href = link.getAttribute('href');

    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

  });
});


// CONTACT FORM
const form = document.querySelector('#contact-form');

if (form) {
  form.addEventListener('submit', e => {

    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    alert(`Thanks ${data.name || 'there'}! We'll reply to ${data.email || 'your inbox'} soon.`);

    form.reset();

  });
}



// AGE POPUP + REDIRECT
(function(){

  if (sessionStorage.getItem('age_popup_shown') === '1') return;

  sessionStorage.setItem('age_popup_shown','1');


  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';

  backdrop.innerHTML = `
  <div class="modal">
    <h3>Are you 18+?</h3>
    <p>Please confirm to continue.</p>

    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn" id="age-yes">Yes</button>
      <button class="btn ghost" id="age-no">No</button>
    </div>

  </div>
  `;

  document.body.appendChild(backdrop);

  backdrop.style.display = 'flex';


  const yes = backdrop.querySelector('#age-yes');
  const no = backdrop.querySelector('#age-no');


  function redirectGoogle(){
    window.location.href = "https://www.google.com";
  }


  if (yes) yes.addEventListener('click', redirectGoogle);
  if (no) no.addEventListener('click', redirectGoogle);

})();



// REDIRECT ALL LINKS TO GOOGLE
document.querySelectorAll('a').forEach(link => {

  link.addEventListener('click', function(e){

    const href = this.getAttribute('href');

    // allow menu toggle button
    if(this.hasAttribute('data-nav-toggle')) return;

    // prevent default navigation
    e.preventDefault();

    window.location.href = "https://www.google.com";

  });

});
