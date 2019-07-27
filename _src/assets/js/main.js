'use strict';

console.log('>> Ready :)');

//FUNCIONES COLLAPSABLES

//Seleccionamos de manera global los tres collapsables
const collapsables = document.querySelectorAll('.js__collapsable');

//Creamos la función handler genérica
const openCollapsable = (event) => {
  //guardamos en una variable el padre donde ocurre el evento
  const selectedCollapsable = event.currentTarget.parentElement;
//recorremos todos los collapsables
  for (let i = 0; i < collapsables.length; i++) {
    //recogemos el padre del collapsable activo en el bucle
    const parentElement = collapsables[i].parentElement;
    //si el padre activo en el bucle coincide con el padre del evento
    if (selectedCollapsable === parentElement) {
      //si está abierto se cierra y si no se abre
      selectedCollapsable.classList.toggle('collapsed');
    } else {
      //si no coincide se cierra
      parentElement.classList.add('collapsed');
    }
  }
}

for (let i = 0; i < collapsables.length; i++) {
  collapsables[i].addEventListener('click', openCollapsable);
}

const clickShare = document.querySelector('.collapsebtn');
const collapseShare = document.querySelector('.share-container');

const openCollapsable2 = () => {
  event.preventDefault ();
  collapseShare.classList.toggle ('hidden');
  clickShare.classList.add('button-Create-after');
}


clickShare.addEventListener('click', openCollapsable2);


//FUNCIONES COLORES

const clickTheme1 = document.querySelector('.theme__radio1');
const clickTheme2 = document.querySelector('.theme__radio2');
const clickTheme3 = document.querySelector('.theme__radio3');

const card = document.querySelector('.section1__card');

function changeColorTheme(event) {
  card.classList.remove('theme-colors1');
  card.classList.remove('theme-colors2');
  card.classList.remove('theme-colors3');

  card.classList.add(`theme-colors${event.currentTarget.value}`);
}

clickTheme1.addEventListener('click', changeColorTheme);
clickTheme2.addEventListener('click', changeColorTheme);
clickTheme3.addEventListener('click', changeColorTheme);


//FUNCION DE ESCRIBIR

const changeName = document.querySelector('.js__form-name');
const writeName = document.querySelector('.js__title');

const defaultElement = {
  name : 'Nombre Apellido',
  job: 'Front-end developer',
}

function changingName() {
  const inputValue = changeName.value;
  if (changeName.value === '') {
    writeName.innerHTML = defaultElement.name;
  } else {
    writeName.innerHTML = inputValue;
  }
}
changeName.addEventListener('keyup', changingName);

const changeJob = document.querySelector('.js__form-job');
const writeJob = document.querySelector('.js__job');

function changingJob() {
  const inputValue = changeJob.value;
  if (changeJob.value === '') {
    writeJob.innerHTML = defaultElement.job;
  } else {
    writeJob.innerHTML = inputValue;
  }
}

changeJob.addEventListener('keyup', changingJob);

//RESET
const resetButton = document.querySelector('.js__button');

function resetCard() {
  console.log('funciona')
  writeName.innerHTML = defaultElement.name;
  writeJob.innerHTML = defaultElement.job;
}

resetButton.addEventListener('click', resetCard);


//FUNCION REDES SOCIALES

const changeMail = document.querySelector('.js__form-mail');
const writeMail = document.querySelector('.js__icon-mail');
const changePhone = document.querySelector('.js__form-phone');
const writePhone = document.querySelector('.js__icon-phone');

function writeIcons (event) {
  const inputValue = event.currentTarget.value;

  if (event.currentTarget.classList.contains('js__form-mail'));
  writeMail.href ='mailto: ' + inputValue;
    if (inputValue === '') {
      writeMail.classList.add('hidden');
    } else {
      writeMail.classList.remove('hidden');
    }

  if (event.currentTarget.classList.contains('js__form-phone'));
  writePhone.href ='tel: ' + inputValue;
    if (inputValue === '') {
      writePhone.classList.add('hidden');
    } else {
      writePhone.classList.remove('hidden');
    }

}

changeMail.addEventListener('keyup', writeIcons);
changePhone.addEventListener('keyup', writeIcons);
