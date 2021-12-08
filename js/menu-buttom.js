const menu2 = document.querySelector(".menu-list");
const menu2Items = document.querySelectorAll(".menu-item");
const menu2Hamburger = document.querySelector(".menu-list__hamburger");
const menu2CloseIcon = document.querySelector(".menu-list__closeIcon");
const menu2MenuIcon = document.querySelector(".menu-list__menuIcon");

function toggleMenu() {
  if (menu2.classList.contains("showMenu")) {
    menu2.classList.remove("showMenu");
    menu2CloseIcon.style.display = "none";
    menu2MenuIcon.style.display = "block";
  } else {
    menu2.classList.add("showMenu");
    menu2CloseIcon.style.display = "block";
    menu2MenuIcon.style.display = "none";
    if (
      menu.classList.contains("showMenu") ||
      searchMenu.classList.contains("search__showMenu")
    ) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      searchMenu.classList.remove("search__showMenu");
      searchCloseIcon.style.display = "none";
      searchMenuIcon.style.display = "block";
    }
  }
}

menu2Hamburger.addEventListener("click", toggleMenu);
