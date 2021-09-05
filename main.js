const menuButton = document.getElementsByClassName('nav__menu')[0];
const navLinks = document.getElementsByClassName('nav__links')[1];

menuButton.addEventListener('click', () =>{
  navLinks.classList.toggle('active')
} );