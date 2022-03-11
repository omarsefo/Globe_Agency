///nav
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 24);
    // document.body.style.scrollBehavior="smooth";
});