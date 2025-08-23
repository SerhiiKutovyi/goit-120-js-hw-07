const bodyRef = document.querySelector('body');

const buttonChangeColorRef = document.querySelector('.change-color');

const colorRef = document.querySelector('.color');

buttonChangeColorRef.addEventListener('click', e => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorRef.innerHTML = bodyRef.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
