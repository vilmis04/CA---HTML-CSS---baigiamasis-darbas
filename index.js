const navBtn = document.getElementById("hamburger-menu");
const links = document.getElementById("navMenu");

navBtn.addEventListener("click", function() {
    links.classList.toggle("show-links");
});