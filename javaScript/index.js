const navBtn = document.getElementById("hamburger-menu");
const links = document.getElementById("navMenu");
const navItems = document.querySelectorAll(".nav-item");
const freeScreen = document.querySelectorAll("section");

function toggleMenu() {
    links.classList.toggle("show-links");
    navBtn.classList.toggle("change");
}

function closeMenu() {
    links.classList.remove("show-links");
    navBtn.classList.remove("change");
}

navBtn.addEventListener("click", toggleMenu);
navItems.forEach(item => item.addEventListener("click", closeMenu));
freeScreen.forEach(item => item.addEventListener("click", closeMenu));



// const projectCard = document.querySelectorAll(".project-card");
// const cardDecor = document.querySelectorAll(".project-title-decor");
//
// function addDecor() {
//     cardDecor.classList.add("show-links");
// }
//
// function removeDecor() {
//     cardDecor.classList.remove("show-links");
// }
//
// freeScreen.forEach(item => item.addEventListener("mouseover", removeDecor));
// projectCard.forEach(item => item.addEventListener("mouseover", addDecor));