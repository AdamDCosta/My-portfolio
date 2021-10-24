const menuButton = document.getElementsByClassName("nav__menu")[0];
const navList = document.getElementsByClassName("nav__links")[0];
const navLinks = document.querySelectorAll(".nav__links--li");


menuButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});

navLinksArr = Array.from.navLinks

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    navList.classList.add("nav__links");

  })
  
});


