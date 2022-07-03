// SEARCH
let btnArea = document.querySelector(".main-block-search");
let search = document.querySelector(".main-block-search-search");
let close = document.querySelector(".main-block-search-close");
let menu = document.querySelector(".main-block-search-menu");
btnArea.addEventListener("click", function () {
  search.classList.toggle("hidden");
  close.classList.toggle("block");
  menu.classList.toggle("block");
});

// BURGER-MENU
let burgerOpen = document.querySelector(".burger-menu-main");
let burgerClose = document.querySelector(".header-list-close-picture");
let burgerList = document.querySelector(".header-list-all");
burgerOpen.addEventListener("click", function () {
  burgerList.style.display = "block";
  burgerClose.onclick = function () {
    burgerList.style.display = "none";
  };
});

// MORE-MENU
let moreOpen = document.querySelector(".burger-menu-more-picture");
let moreClose = document.querySelector(".header-list-main-close-picture");
let moreList = document.querySelector(".header-list-main");
moreOpen.addEventListener("click", function () {
  moreList.style.display = "flex";
  moreClose.onclick = function () {
    moreList.style.display = "none";
  };
});

// MAIN-MENU
let menuOpen = document.querySelector(".main-menu-picture");
let menuClose = document.querySelector(".main-block-close-picture");
let menuList = document.querySelector(".main-block");

menuOpen.addEventListener("click", function () {
  menuList.style.display = "block";
  menuClose.onclick = function () {
    menuList.style.display = "none";
  };
});
