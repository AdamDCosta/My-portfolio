// const menuButton = document.getElementsByClassName('nav__menu')[0];
// const navLinks = document.getElementsByClassName('nav__links')[0];

// menuButton.addEventListener('click', () =>{
//   navLinks.classList.toggle('active')
// } );

const menuButton = document.getElementsByClassName('nav__menu')[0];
const navLinks = document.getElementsByClassName('nav__links')[0];

menuButton.addEventListener('click', () =>{
  console.log(navLinks)
  navLinks.classList.toggle('active')
} );