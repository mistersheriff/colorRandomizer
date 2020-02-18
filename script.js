var clickMe = document.querySelector("button");
var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

clickMe.addEventListener("click", () => {
  changeColor();
  genRandom();
});

function changeColor() {
  document.body.style.backgroundColor = randomColor;
  document.querySelector("h1").textContent = randomColor;
}

function genRandom() {
  randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  if (randomColor.length < 7) {
    genRandom();
  }
}
