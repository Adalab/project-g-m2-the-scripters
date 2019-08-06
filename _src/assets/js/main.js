'use strict';

const changeName = document.querySelector('.js__form-name');
const writeName = document.querySelector('.js__title');
const changeJob = document.querySelector('.js__form-job');
const writeJob = document.querySelector('.js__job');
const changeMail = document.querySelector('.js__form-mail');
const writeMail = document.querySelector('.js__icon-mail');
const changePhone = document.querySelector('.js__form-phone');
const writePhone = document.querySelector('.js__icon-phone');
const changeLinkedin = document.querySelector('.js__form-linkedin');
const writeLinkedin = document.querySelector('.js__icon-linkedin');
const changeGithub = document.querySelector('.js__form-github');
const writeGithub = document.querySelector('.js__icon-github');
const card = document.querySelector('.section1__card');
const themeRadio = document.querySelectorAll('.js__theme__radio');
const clickTheme1 = document.querySelector('.theme__radio1');
const clickTheme2 = document.querySelector('.theme__radio2');
const clickTheme3 = document.querySelector('.theme__radio3');
const imageCardContainer = document.querySelector ('.section1__image');
const previewImage = document.querySelector ('.form-photo-preview');
const imgCard = document.querySelector ('#img');
let resultColorValue;
let savedData;

if (localStorage.getItem('color')) {
  savedData = localStorage.getItem('color');
  changeColorTheme(savedData);
  resultColorValue = savedData;
  if(savedData === '1') {
    clickTheme1.setAttribute('checked', true);
    clickTheme2.removeAttribute('checked', false);
    clickTheme3.removeAttribute('checked', false);
  } else if (savedData === '2') {
    clickTheme2.setAttribute('checked', true);
    clickTheme3.removeAttribute('checked', false);
    clickTheme1.removeAttribute('checked', false);
  } else if (savedData === '3'){
    clickTheme3.setAttribute('checked', true);
    clickTheme2.removeAttribute('checked', false);
    clickTheme1.removeAttribute('checked', false);
  }
} else {
  clickTheme1.setAttribute('checked', true);
  clickTheme2.removeAttribute('checked', false);
  clickTheme3.removeAttribute('checked', false);
}

if (localStorage.getItem('name')) {
  savedData = localStorage.getItem('name');
  changeName.value = savedData;
  changingName();
}

if (localStorage.getItem('job')) {
  savedData = localStorage.getItem('job');
  changeJob.value = savedData;
  changingJob();
}

if (localStorage.getItem('image') !== null) {
  savedData = localStorage.getItem('image');
  imageCardContainer.style.backgroundImage = `url(${savedData})`;
  imgCard.src=`${savedData}`;
  previewImage.style.backgroundImage = `url(${savedData})`;
}
else{
  imageCardContainer.style.backgroundImage = `url(${backgroundImg})`;
  imgCard.src=`${backgroundImg}`;
  previewImage.style.backgroundImage = `url(${backgroundImg})`;
}



if (localStorage.getItem('mail')) {
  savedData = localStorage.getItem('mail');
  changeMail.value = savedData;
  writeMailfun();
}

if (localStorage.getItem('phone')) {
  savedData = localStorage.getItem('phone');
  changePhone.value = savedData;
  writePhonefun();
}

if (localStorage.getItem('linkedin')) {
  savedData = localStorage.getItem('linkedin');
  changeLinkedin.value = savedData;
  writeLikedinfun();
}

if (localStorage.getItem('github')) {
  savedData = localStorage.getItem('github');
  changeGithub.value = savedData;
  writeGithubfun();
}

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
};

for (let i = 0; i < collapsables.length; i++) {
  collapsables[i].addEventListener('click', openCollapsable);
}
/*
const clickShare = document.querySelector('.collapsebtn');
const collapseShare = document.querySelector('.share-container');

const openCollapsable2 = () => {
  event.preventDefault ();
  collapseShare.classList.toggle ('hidden');
  clickShare.classList.add('button-Create-after');
}


clickShare.addEventListener('click', openCollapsable2);
*/

//FUNCIONES COLORES

function changeColorTheme(value) {
  card.classList.remove('theme-colors1');
  card.classList.remove('theme-colors2');
  card.classList.remove('theme-colors3');

  card.classList.add(`theme-colors${value}`);
  resultColorValue = value;
  localStorage.setItem('color', resultColorValue);
  return resultColorValue;
}

clickTheme1.addEventListener('click', (event) => changeColorTheme(event.currentTarget.value));
clickTheme2.addEventListener('click', (event) => changeColorTheme(event.currentTarget.value));
clickTheme3.addEventListener('click', (event) => changeColorTheme(event.currentTarget.value));


//FUNCION NOMBRE & TRABAJO

const defaultElement = {
  color :'1',
  name : 'Nombre Apellido',
  job: 'Front-end developer',
  email: '',
  phone:'',
  linkedin:'',
  github:'',
  imageCardContainer: `url(${backgroundImg})`,
  imgCard: `${backgroundImg}`,
  previewImage: `url(${backgroundImg})`,
};

function changingName() {
  const inputValue = changeName.value;
  if (changeName.value === '') {
    writeName.innerHTML = defaultElement.name;
  } else {
    localStorage.setItem('name', inputValue);
    writeName.innerHTML = inputValue;
  }
  imgCard.alt= inputValue;
}
changeName.addEventListener('keyup', changingName);

function changingJob() {
  const inputValue = changeJob.value;
  if (changeJob.value === '') {
    writeJob.innerHTML = defaultElement.job;
  } else {
    localStorage.setItem('job', inputValue);
    writeJob.innerHTML = inputValue;
  }
}

changeJob.addEventListener('keyup', changingJob);

//FUNCION REDES SOCIALES

function writeMailfun (inputValue) {
  inputValue = changeMail.value;
  writeMail.href ='mailto: ' + inputValue;
  if (inputValue === '') {
    writeMail.classList.add('hidden');
  } else {
    localStorage.setItem('mail', inputValue);
    writeMail.classList.remove('hidden');
  }
}

function writePhonefun (inputValue) {
  inputValue = changePhone.value;
  writePhone.href ='tel: ' + inputValue;
  if (inputValue === '') {
    writePhone.classList.add('hidden');
  } else {
    localStorage.setItem('phone', inputValue);
    writePhone.classList.remove('hidden');
  }
}

function writeLikedinfun (inputValue) {
  inputValue = changeLinkedin.value;
  let newInputValue = '';
  if (inputValue.includes('@')) {
    newInputValue = inputValue.replace('@', '');
  } else {
    newInputValue = inputValue;
  }
  writeLinkedin.href = 'https://www.linkedin.com/in/' + newInputValue;
  if (inputValue === '') {
    writeLinkedin.classList.add('hidden');
  } else {
    localStorage.setItem('linkedin', inputValue);
    writeLinkedin.classList.remove('hidden');
  }
}

function writeGithubfun (inputValue) {
  inputValue = changeGithub.value;
  let newInputValue = '';
  if (inputValue.includes('@')) {
    newInputValue = inputValue.replace('@', '');
  } else {
    localStorage.setItem('github', inputValue);
    newInputValue = inputValue;
  }
  writeGithub.href = 'https://github.com/' + newInputValue;
  if (inputValue === '') {
    writeGithub.classList.add('hidden');
  } else {
    localStorage.setItem('github', inputValue);
    writeGithub.classList.remove('hidden');
  }
}

//creamos una función anónima como handler donde ejecutamos la función que queremos con sólo el value
changeMail.addEventListener('keyup', (event) => writeMailfun(event.currentTarget.value));
changePhone.addEventListener('keyup', (event) => writePhonefun(event.currentTarget.value));
changeLinkedin.addEventListener('keyup', (event) => writeLikedinfun(event.currentTarget.value));
changeGithub.addEventListener('keyup', (event) => writeGithubfun(event.currentTarget.value));

//IMAGEN POR DEFECTO



//RESET
const resetButton = document.querySelector('.js__button');

function resetCard() {
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
  imageCardContainer.style.backgroundImage = defaultElement.imageCardContainer ;
  imgCard.src= defaultElement.imgCard;
  previewImage.style.backgroundImage = defaultElement.previewImage;
  changeColorTheme(defaultElement.color);
}

resetButton.addEventListener('click', resetCard);

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
  imgCard.src=`${fr.result}`;
  localStorage.setItem('image', fr.result);
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

//PETICIONES AL SERVIDOR

const shareUrl = document.querySelector('.js__response');
const clickShare = document.querySelector('.collapsebtn');


function writeObject(){
  const objectForm = {};
  for (let color of themeRadio) {
    if(color.checked) {
      objectForm.palette = color.value;
    }
  }
  objectForm.name = changeName.value;
  objectForm.job = changeJob.value;
  objectForm.phone = changePhone.value;
  objectForm.email = changeMail.value;
  objectForm.linkedin = changeLinkedin.value;
  objectForm.github = changeGithub.value;
  objectForm.photo = fr.result;

  return objectForm;
}

let cardUrl = '';

function sendRequest(){
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(writeObject()),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) { return resp.json(); })
    .then(data => {
      cardUrl = data.cardURL;
      shareUrl.innerHTML = '<a class="share-link-url" target="__blank" href=' + cardUrl + '>' + cardUrl + '</a>';
    });
}

clickShare.addEventListener('click',sendRequest);


// FUNCIONALIDAD DEL BOTÓN TWITTER

const buttonTwitter = document.querySelector('.js__button-Twitter');

function openTwitter ()  {
  const userUrl = cardUrl;
  const twitterText = '¡Hola! Aquí tienes mi tarjeta de contacto. No te olvides de llamarme. Saludos!';
  const hashtags = 'adalab,the-scripters,js';
  buttonTwitter.href = 'https://twitter.com/intent/tweet?url='+encodeURIComponent(userUrl)+'&text='+encodeURIComponent(twitterText)+'&hashtags='+encodeURIComponent(hashtags);
}

buttonTwitter.addEventListener('click', openTwitter);

