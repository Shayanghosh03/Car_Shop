window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    header.classList.toggle("stickyNav", window.scrollY > 0);
})
let list = document.querySelectorAll('.nav li');
function active(){
    list.forEach((i) => 
    i.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((i) =>
i.addEventListener('click', active));

let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");
menuToggle.onclick = function(){
    header.classList.toggle("active");
}
