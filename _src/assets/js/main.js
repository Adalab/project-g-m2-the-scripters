'use strict';

console.log('>> Ready :)');

//Crear constante con las etiquetas de HTML
const clickDesign = document.querySelector('.design-collapsable');
const clickFill = document.querySelector('.fill-collapsable');
const clickSubmit = document.querySelector('.submit-collapsable');

const clickShare = document.querySelector('.collapsebtn');

const collapseDesign = document.querySelector('.design-container');
const collapseFill = document.querySelector('.fill-container');
const collapseSubmit = document.querySelector('.submit-container');

const collapseShare = document.querySelector('.share-container');


//FUNCIÓN
const openCollapsable = () => {
  collapseDesign.classList.toggle ('hidden');
  collapseFill.classList.add ('hidden');
  collapseSubmit.classList.add('hidden')
}
const openCollapsable2 = () => {
  collapseDesign.classList.add ('hidden');
  collapseFill.classList.toggle ('hidden');
  collapseSubmit.classList.add ('hidden')
}
const openCollapsable3 = () => {
  collapseDesign.classList.add ('hidden');
  collapseFill.classList.add ('hidden');
  collapseSubmit.classList.toggle ('hidden')
}

const openCollapsable4 = () => {
  event.preventDefault ();
  collapseShare.classList.toggle ('hidden');
  clickShare.classList.add('button-Create-after');
}

/*
function openCollapsable (event) {
  collapseDesign.classList.toggle ('hidden');
}
function openCollapsable2 (event) {
  collapseFill.classList.toggle ('hidden');
}
function openCollapsable3 (event) {
  collapseSubmit.classList.toggle ('hidden');
}

function openCollapsable4 (event) {
  event.preventDefault ();
  collapseShare.classList.toggle ('hidden');
  clickShare.classList.add('button-Create-after');
}*/

//Listeners
clickDesign.addEventListener('click', openCollapsable);
clickFill.addEventListener('click', openCollapsable2);
clickSubmit.addEventListener('click', openCollapsable3);

clickShare.addEventListener('click', openCollapsable4);

const clickTheme1 = document.querySelector('.theme__radio1');
const clickTheme2 = document.querySelector('.theme__radio2');
const clickTheme3 = document.querySelector('.theme__radio3');


//FUNCIONES COLORES

const card = document.querySelector('.section1__card');

function changeColor (event){
  const tema = event.currentTarget.value;

  if(event.currentTarget.value === 'theme1'){
    card.classList.remove ('theme-colors1');
    card.classList.remove ('theme-colors2');
    card.classList.remove ('theme-colors3');

    card.classList.add ('theme-colors1');
  }
  else if (event.currentTarget.value === 'theme2'){
    card.classList.remove ('theme-colors1');
    card.classList.remove ('theme-colors2');
    card.classList.remove ('theme-colors3');

    card.classList.add ('theme-colors2');
  }
  else{
    card.classList.remove ('theme-colors1');
    card.classList.remove ('theme-colors2');
    card.classList.remove ('theme-colors3');

    card.classList.add ('theme-colors3');
  }
}

clickTheme1.addEventListener('click', changeColor);
clickTheme2.addEventListener('click', changeColor);
clickTheme3.addEventListener('click', changeColor);
