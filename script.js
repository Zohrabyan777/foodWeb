"use strict";
debugger;
const menuBtn = document.querySelector(".menu_btn");
const menuList = document.querySelector("nav");
const menuul = document.querySelector(".list");
const main = document.querySelector("main");
console.log(main, menuul, menuList);
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("toggelmenu");
  main.classList.toggle("nav");
  menuul.classList.toggle("togglelist");
});
