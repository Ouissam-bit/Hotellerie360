// Hamburger toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', ()=> navLinks.classList.toggle('show'));

// Navbar scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => { 
  if(window.scrollY > 50) navbar.classList.add('scrolled'); 
  else navbar.classList.remove('scrolled'); 
});

// Language selector
const langSelector = document.getElementById('lang-selector');
const currentLang = document.getElementById('current-lang');
langSelector.addEventListener('click', ()=> langSelector.classList.toggle('show'));

// Signup form
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');
signupForm.addEventListener('submit', e=>{
  e.preventDefault();
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  if(firstName && lastName && email){
    signupMessage.textContent = `Merci ${firstName} ! Votre inscription a été enregistrée.`;
    signupForm.reset();
  } else{
    signupMessage.textContent = "Veuillez remplir tous les champs correctement.";
  }
});
