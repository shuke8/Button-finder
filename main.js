document.addEventListener("keydown", (e) => {
  document.querySelector(".text").style.display = "none";
  document.querySelector(".box .content").style.display = "flex";
  document.querySelector(".key-code").innerHTML = ` ${e.keyCode}`;
  document.querySelector(".code").innerHTML = `Code :   ${e.keyCode}`;
  document.querySelector(".key-name").style.textTransform = "uppercase";
  document.querySelector(".key-name").innerHTML = `${e.key}`;
  document.querySelector(".key").innerHTML = `Key: ${e.key}`;
  if (e.key == " ") {
    e.key = document.querySelector(".key-name").innerHTML = "Space";
    document.querySelector(".key").innerHTML = "Key : Space";
  }
});

const mouseBox = document.querySelector(".mouseName");
const mouseContent = document.querySelector(".mouse-content");
const mouseText = document.getElementById("mouseText");

window.onmousedown = function (event) {
  mouseText.style.display = "none";
  mouseContent.style.display = "block";
  if (event.button == 1) {
    mouseBox.innerHTML = "O'rta tugma";
  } else if (event.button == 2) {
    mouseBox.innerHTML = "O'ng tugma ";
  } else if (event.button == 0) {
    mouseBox.innerHTML = "Chap tugma";
  }
};
