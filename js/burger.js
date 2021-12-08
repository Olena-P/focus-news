const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    if (
      menu2.classList.contains("showMenu") ||
      searchMenu.classList.contains("search__showMenu")
    ) {
      menu2.classList.remove("showMenu");
      menu2CloseIcon.style.display = "none";
      menu2MenuIcon.style.display = "block";
      searchMenu.classList.remove("search__showMenu");
      searchCloseIcon.style.display = "none";
      searchMenuIcon.style.display = "block";
    }
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
