const searchMenu = document.querySelector(".search__container");
const searchMenuItems = document.querySelectorAll(".search-input");
const searchHamburger = document.querySelector(".search-button");
const searchCloseIcon = document.querySelector(".search-button__svg-closeIcon");
const searchMenuIcon = document.querySelector(".search-button__svg");

function toggleMenu() {
  if (searchMenu.classList.contains("search__showMenu")) {
    searchMenu.classList.remove("search__showMenu");
    searchCloseIcon.style.display = "none";
    searchMenuIcon.style.display = "block";
  } else {
    searchMenu.classList.add("search__showMenu");
    searchCloseIcon.style.display = "block";
    searchMenuIcon.style.display = "none";
  }
}

searchHamburger.addEventListener("click", toggleMenu);

// searchMenuItems.forEach(function (menuItem) {
//   menuItem.addEventListener("click", toggleMenu);
// });
