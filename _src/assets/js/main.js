'use strict';

console.log('>> Ready :)');

//FUNCIONES COLLAPSABLES
const clickDesign = document.querySelector('.design-collapsable');
const clickFill = document.querySelector('.fill-collapsable');
const clickSubmit = document.querySelector('.submit-collapsable');

const parent1 = document.querySelector('.js__parent1');
const parent2 = document.querySelector('.js__parent2');
const parent3 = document.querySelector('.js__parent3');

const clickShare = document.querySelector('.collapsebtn');
const collapseShare = document.querySelector('.share-container');

const openCollapsable = (event) => {
  const collapsable = event.currentTarget.parentElement;
  if (collapsable === parent1){
    parent1.classList.toggle('js__collapsable1');
    parent2.classList.add('js__collapsable2');
    parent3.classList.add('js__collapsable3');
  } else if (collapsable === parent2) {
    parent1.classList.add('js__collapsable1');
    parent2.classList.toggle('js__collapsable2');
    parent3.classList.add('js__collapsable3');
  } else {
    parent1.classList.add('js__collapsable1');
    parent2.classList.add('js__collapsable2');
    parent3.classList.toggle('js__collapsable3');
  }
}

const openCollapsable2 = () => {
  event.preventDefault ();
  collapseShare.classList.toggle ('hidden');
  clickShare.classList.add('button-Create-after');
}

clickDesign.addEventListener('click', openCollapsable);
clickFill.addEventListener('click', openCollapsable);
clickSubmit.addEventListener('click', openCollapsable);

clickShare.addEventListener('click', openCollapsable2);


//FUNCIONES COLORES

const clickTheme1 = document.querySelector('.theme__radio1');
const clickTheme2 = document.querySelector('.theme__radio2');
const clickTheme3 = document.querySelector('.theme__radio3');

const card = document.querySelector('.section1__card');

function changeColorTheme(event) {
  console.log(event.currentTarget.value)
  card.classList.remove('theme-colors1');
  card.classList.remove('theme-colors2');
  card.classList.remove('theme-colors3');

  card.classList.add(event.currentTarget.value);
}

clickTheme1.addEventListener('click', changeColorTheme);
clickTheme2.addEventListener('click', changeColorTheme);
clickTheme3.addEventListener('click', changeColorTheme);


//FUNCION DE ESCRIBIR

const changeTitle = document.querySelector('.js__form-name');
const writeTitle = document.querySelector('.js__title');

function changeName() {
  const inputValue = changeTitle.value;
  if (changeTitle.value === '') {
    writeTitle.innerHTML = 'Nombre Apellido';
  } else {
    writeTitle.innerHTML = inputValue;
  }
}
changeTitle.addEventListener('keyup', changeName);

const Job = document.querySelector('.js__form-job');
const writeJob = document.querySelector('.js__job');

function changeJob() {
  const inputValue = Job.value;
  if (Job.value === '') {
    writeJob.innerHTML = 'Front-end developer';
  } else {
    writeJob.innerHTML = inputValue;
  }
}

Job.addEventListener('keyup', changeJob);
