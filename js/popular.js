let popularWidth = 325;
let popularCount = 1;

let popularList = popular.querySelector("ul");
let popularListElems = popular.querySelectorAll("li");

let popularPosition = 0;

popular.querySelector(".prev").onclick = function () {
  popularPosition += popularWidth * popularCount;
  popularPosition = Math.min(popularPosition, 0);
  popularList.style.marginLeft = popularPosition + "px";
};

popular.querySelector(".next").onclick = function () {
  popularPosition -= popularWidth * popularCount;
  popularPosition = Math.max(
    popularPosition,
    -popularWidth * (popularListElems.length - 4)
  );
  popularList.style.marginLeft = popularPosition + "px";
};
