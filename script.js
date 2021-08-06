const header = document.querySelector(".header");
const arrows = document.querySelectorAll(".arrows-field div");
const closebtn = document.querySelector(".close-icon");

let imageSelected = 1;
function changeBackgroundImage(n = 1) {
  header.style.backgroundImage = `url(./images/desktop-image-hero-${n}.jpg)`;
}

function changeDescribeContent(displayStatus, contentNumber) {
  document.querySelectorAll(`.describe-${contentNumber}`).forEach((el) => {
    el.style.display = displayStatus;
  });
}

arrows[0].addEventListener("click", () => {
  changeDescribeContent("none", imageSelected);
  imageSelected > 1 && imageSelected--;
  changeDescribeContent("block", imageSelected);
  document.addEventListener(
    "DOMContentLoaded",
    changeBackgroundImage(imageSelected)
  );
});
arrows[1].addEventListener("click", () => {
  changeDescribeContent("none", imageSelected);
  imageSelected <= 2 && imageSelected++;
  changeDescribeContent("block", imageSelected);
  document.addEventListener(
    "DOMContentLoaded",
    changeBackgroundImage(imageSelected)
  );
});

closebtn.addEventListener(
  "click",
  () => (document.getElementById("menu").checked = false)
);
