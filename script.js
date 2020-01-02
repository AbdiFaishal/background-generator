var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var btn = document.querySelector('.button');

function setGradient() {
  body.style.background =
  "linear-gradient(to right, "
  + color1.value
  + ", "
  +  color2.value
  + ")";

  css.textContent = body.style.background + ";";
}

function randomBg() {
  body.style.background =
  "linear-gradient(to right, "
  + bgChange()
  + ", "
  +  bgChange()
  + ")";

  css.textContent = body.style.background + ";";
}

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  return randomColor;
}



window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomBg);
