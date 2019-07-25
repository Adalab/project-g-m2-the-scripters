'use strict';

console.log('>> Ready :)');

const clickTheme1 = document.querySelector('.theme__radio1');
const clickTheme2 = document.querySelector('.theme__radio2');
const clickTheme3 = document.querySelector('.theme__radio3');

const card = document.querySelector('.section1__card');

function changeColor1 () {
    card.classList.remove ('theme-colors1');
    card.classList.remove ('theme-colors2');
    card.classList.remove ('theme-colors3');

    card.classList.add ('theme-colors1');
}

function changeColor2 () {
  card.classList.remove ('theme-colors1');
  card.classList.remove ('theme-colors2');
  card.classList.remove ('theme-colors3');

  card.classList.add ('theme-colors2');
}

function changeColor3 () {
  card.classList.remove ('theme-colors1');
  card.classList.remove ('theme-colors2');
  card.classList.remove ('theme-colors3');

  card.classList.add ('theme-colors3');
}

clickTheme1.addEventListener('click', changeColor1);
clickTheme2.addEventListener('click', changeColor2);
clickTheme3.addEventListener('click', changeColor3);
