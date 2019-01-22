// Hamburger Menu
const menuFive = document.querySelector('.menuFive');
function addClassFunFive() {
  this.classList.toggle("clickMenuFive");
}
menuFive.addEventListener('click', addClassFunFive);

//

var openBtn = document.querySelector(".open");
var closeBtn = document.querySelector("#close");
var container = document.querySelector("#container");
var nav = document.querySelector("#sideNav");

openBtn.addEventListener("click", function(){
  nav.style.width = "220px";
  // container.style.marginLeft = "220px";
  // this.style.display = "none";
});
closeBtn.addEventListener("click", function(){
  nav.style.width = "0";
  // container.style.marginLeft = "0";
  // openBtn.style.display = "block";
});