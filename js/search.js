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
    if (
      menu.classList.contains("showMenu") ||
      menu2.classList.contains("showMenu")
    ) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      menu2.classList.remove("showMenu");
      menu2CloseIcon.style.display = "none";
      menu2MenuIcon.style.display = "block";
    }
  }
}

searchHamburger.addEventListener("click", toggleMenu);
