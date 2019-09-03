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
let resultColorValue;
let savedData;

if (localStorage.getItem('color')) {
  savedData = localStorage.getItem('color');
  changeColorTheme(savedData);
  resultColorValue = savedData;
  if(savedData === '1') {
    clickTheme1.setAttribute('checked', true);
  } else if (savedData === '2') {
    clickTheme2.setAttribute('checked', true);
  } else if (savedData === '3'){
    clickTheme3.setAttribute('checked', true);
  }
} else {
  clickTheme1.setAttribute('checked', true);
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
const collapseShare = document.querySelector('.share-container');
const submitContainer = document.querySelector('.js__submit-container');

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
  color : '1',
  name : 'Nombre Apellido',
  job: 'Front-end developer',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  imageCardContainer: `url(${backgroundImg})`,
  imgCard: `${backgroundImg}`,
  previewImage: `url(${backgroundImg})`,
};

function changingName() {
  const inputValue = changeName.value;
  if (changeName.value === '') {
    writeName.innerHTML = defaultElement.name;
    localStorage.removeItem('name');
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
    localStorage.removeItem('job');
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
    localStorage.removeItem('mail');
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
    localStorage.removeItem('phone');
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
    localStorage.removeItem('linkedin');
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
    newInputValue = inputValue;
  }
  writeGithub.href = 'https://github.com/' + newInputValue;
  if (inputValue === '') {
    writeGithub.classList.add('hidden');
    localStorage.removeItem('github');
  } else {
    localStorage.setItem('github', inputValue);
    writeGithub.classList.remove('hidden');
  }
}

changeMail.addEventListener('keyup', (event) => writeMailfun(event.currentTarget.value));
changePhone.addEventListener('keyup', (event) => writePhonefun(event.currentTarget.value));
changeLinkedin.addEventListener('keyup', (event) => writeLikedinfun(event.currentTarget.value));
changeGithub.addEventListener('keyup', (event) => writeGithubfun(event.currentTarget.value));

//RESET
const resetButton = document.querySelector('.js__button');

function resetCard() {
  localStorage.removeItem('name');
  writeName.innerHTML = defaultElement.name;

  localStorage.removeItem('job');
  writeJob.innerHTML = defaultElement.job;

  localStorage.removeItem('mail');
  changeMail.value = defaultElement.email;

  localStorage.removeItem('phone');
  changePhone.value = defaultElement.phone;

  localStorage.removeItem('linkedin');
  changeLinkedin.value = defaultElement.linkedin;

  localStorage.removeItem('github');
  changeGithub.value = defaultElement.github;

  writeMailfun(defaultElement.email);
  writePhonefun(defaultElement.phone);
  writeLikedinfun(defaultElement.linkedin);
  writeGithubfun(defaultElement.github);
  localStorage.removeItem('image');
  imageCardContainer.style.backgroundImage = defaultElement.imageCardContainer ;
  imgCard.src= defaultElement.imgCard;
  previewImage.style.backgroundImage = defaultElement.previewImage;
  localStorage.removeItem('color');
  if(localStorage.removeItem('color') !== '') {
    changeColorTheme(defaultElement.color);
    clickTheme1.removeAttribute('checked', false);
    clickTheme2.removeAttribute('checked', false);
    clickTheme3.removeAttribute('checked', false);
    clickTheme1.setAttribute('checked', true);
  }
}

resetButton.addEventListener('click', resetCard);

//ABRIR COMPARTIR:
const clickShare = document.querySelector('.collapsebtn');

const openCollapsable2 = () => {
  event.preventDefault ();
  collapseShare.classList.toggle ('hidden');
  clickShare.classList.add('button-Create-after');
};

//PETICIONES AL SERVIDOR

const shareUrl = document.querySelector('.js__response');

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
  openCollapsable2();
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



//AÑADIDO CAMBIO IMPROVE PARA CONFIRMACIÓN

//HOLA CHICAAAAAS MODULO 3
