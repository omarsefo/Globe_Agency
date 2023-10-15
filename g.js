setTimeout(function() {
  var response = confirm("Do you want to see the real UI/UX images that I copied?\nClick OK to allow pop-ups for this site and reload the page please.");

  if (response) {
    openImagePopup();
  }
}, 2000);

function openImagePopup() {
  var imagePaths = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg"
  ];

  var newWindow = window.open("", "_blank");

  newWindow.document.write("<!DOCTYPE html><html><head><title>Image Display</title></head><body>");
  newWindow.document.write(`<a href="https://www.instagram.com/p/CYzKVXdAicB/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">click me to show you the ui/ux post</a>`);
  
  imagePaths.forEach(function(imagePath) {
    newWindow.document.write(`<img width='100%' src='${imagePath}' alt='Be real'>`);
  });

  newWindow.document.write("</body></html>");
}

///nav
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 24);
    // document.body.style.scrollBehavior="smooth";
});

var overlay = document.querySelector("[data-overlay]");
const bee = document.getElementById("bee");
const backmenu = document.getElementById('backmenu');
const menup = document.getElementById('menu');
const closep = document.getElementById('close');
const openp = document.querySelector('.menu-btn');
var as = document.getElementsByTagName('a')[1];
var as1 = document.getElementsByTagName('a')[2];
var as2 = document.getElementsByTagName('a')[3];
var as3 = document.getElementsByTagName('a')[4];
var as4 = document.getElementsByTagName('a')[5];

var navElems = [overlay, openp, closep,as , as1, as2, as3, as4];

for (let i = 0; i < navElems.length; i++) {
    navElems[i].addEventListener("click", function () {
        close();
    });
}

window.addEventListener('load', close);
document.addEventListener('loadeddata', close);
document.addEventListener("DOMContentLoaded", close);
menup.addEventListener('load', close);
openp.addEventListener('click', show);

function show() {
    menup.style.display = 'inline-block';
    menup.style.right = '0px';
    overlay.classList.add("over");
}
function close() {
    menup.style.right = '-200%';
    overlay.classList.remove("over");
}