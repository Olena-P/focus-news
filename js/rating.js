let width = 408;
let count = 1;

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");
let btn = document.querySelector(".carousel-button ");
let position = 0;

carousel.querySelector(".prev").onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - 3));
  list.style.marginLeft = position + "px";
};
