const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyColor = document.body.style;
let changeColorInterval = null;

btnStart.addEventListener('click', () => {
  btnStart.setAttribute('disabled', '');
  changeColorInterval = setInterval(() => {
    bodyColor.backgroundColor = getRandomHexColor();
  }, 1000);
});
5;
btnStop.addEventListener('click', () => {
  btnStart.removeAttribute('disabled', '');
  clearInterval(changeColorInterval);
});

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
