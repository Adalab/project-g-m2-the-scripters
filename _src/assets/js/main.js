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


//FUNCION NOMBRE & TRABAJO

const changeName = document.querySelector('.js__form-name');
const writeName = document.querySelector('.js__title');

const defaultElement = {
  name : 'Nombre Apellido',
  job: 'Front-end developer',
  email: '',
  phone:'',
  linkedin:'',
  github:'',
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

//FUNCION REDES SOCIALES

const changeMail = document.querySelector('.js__form-mail');
const writeMail = document.querySelector('.js__icon-mail');
const changePhone = document.querySelector('.js__form-phone');
const writePhone = document.querySelector('.js__icon-phone');
const changeLinkedin = document.querySelector('.js__form-linkedin');
const writeLinkedin = document.querySelector('.js__icon-linkedin');
const changeGithub = document.querySelector('.js__form-github');
const writeGithub = document.querySelector('.js__icon-github');

function writeMailfun (inputValue) {
  writeMail.href ='mailto: ' + inputValue;
    if (inputValue === '') {
      writeMail.classList.add('hidden');
    } else {
      writeMail.classList.remove('hidden');
    }
}

function writePhonefun (inputValue) {
  writePhone.href ='tel: ' + inputValue;
  if (inputValue === '') {
    writePhone.classList.add('hidden');
  } else {
    writePhone.classList.remove('hidden');
  }
}

function writeLikedinfun (inputValue) {
  writeLinkedin.href = 'https://www.linkedin.com/in/' + inputValue;
  if (inputValue === '') {
    writeLinkedin.classList.add('hidden');
  } else {
    writeLinkedin.classList.remove('hidden');
  }
}

function writeGithubfun (inputValue) {
  writeGithub.href = 'https://github.com/' + inputValue;
  if (inputValue === '') {
    writeGithub.classList.add('hidden');
  } else {
    writeGithub.classList.remove('hidden');
  }
}

//creamos una función anónima como handler donde ejecutamos la función que queremos con sólo el value
changeMail.addEventListener('keyup', (event) => writeMailfun(event.currentTarget.value));
changePhone.addEventListener('keyup', (event) => writePhonefun(event.currentTarget.value));
changeLinkedin.addEventListener('keyup', (event) => writeLikedinfun(event.currentTarget.value));
changeGithub.addEventListener('keyup', (event) => writeGithubfun(event.currentTarget.value));


//RESET
const resetButton = document.querySelector('.js__button');

function resetCard() {
  console.log('funciona')
  writeName.innerHTML = defaultElement.name;
  writeJob.innerHTML = defaultElement.job;
  changeMail.value = defaultElement.email;
  changePhone.value = defaultElement.phone;
  changeLinkedin.value = defaultElement.linkedin;
  changeGithub.value = defaultElement.github;
  writeMailfun(defaultElement.email);
  writePhonefun(defaultElement.phone);
  writeLikedinfun(defaultElement.linkedin);
  writeGithubfun(defaultElement.github);
}

resetButton.addEventListener('click', resetCard);


//IMAGEN POR DEFECTO

const imageCardContainer = document.querySelector ('.section1__image');

imageCardContainer.style.backgroundImage = `url(${backgroundImg})`;

const imgCard = document.querySelector ('#img');

imgCard.src=`${backgroundImg}`;


const previewImage = document.querySelector ('.form-photo-preview');

previewImage.style.backgroundImage = `url(${backgroundImg})`;

//IMAGEN PREVISUALIZACIÓN

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');


/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}


/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
 fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
