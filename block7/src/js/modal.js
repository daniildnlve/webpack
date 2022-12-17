// Переменные бокового меню //
let leftMenu = document.querySelector('.left-menu');
let menuButton = document.querySelector('.burger');
let menuClose = document.querySelector('.menu-close')
let menuFog = document.querySelector('.left-menu__fog');

// Переменные модалки звонка //
let callButtons = document.querySelectorAll('.call');
let modalCall = document.querySelector('.modal-call');
let modalClose = document.querySelector('.call-close');
let callFog = document.querySelector('.modal-call__fog');

// Переменные модалки фидбэка //
let feedbackButtons = document.querySelectorAll('.feedback');
let modalFeedback = document.querySelector('.modal-fb');
let feedbackClose = document.querySelector('.fb-close');
let feedbackFog = document.querySelector('.modal-fb__fog');

// Функционал модалки звонка //
for (let callButton of callButtons) {
  callButton.addEventListener('click', function() {
    modalCall.classList.toggle('modal-call--open');
    document.body.style.overflow = "hidden";
  });
}

modalClose.addEventListener('click', function() {
  modalCall.classList.toggle('modal-call--open');
  if (leftMenu.classList.contains('left-menu--open')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

callFog.addEventListener('click', function() {
  modalCall.classList.toggle('modal-call--open');
  if (leftMenu.classList.contains('left-menu--open')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// Функционал модалки фидбэка //
for (let feedbackButton of feedbackButtons) {
  feedbackButton.addEventListener('click', function() {
    modalFeedback.classList.toggle('modal-fb--open');
    document.body.style.overflow = "hidden";
  });
}

feedbackClose.addEventListener('click', function() {
  modalFeedback.classList.toggle('modal-fb--open');
  if (leftMenu.classList.contains('left-menu--open')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

feedbackFog.addEventListener('click', function() {
  modalFeedback.classList.toggle('modal-fb--open');
  if (leftMenu.classList.contains('left-menu--open')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// Функционал бокового меню //
menuButton.addEventListener('click', function() { 
  leftMenu.classList.toggle('left-menu--open');
  document.body.style.overflow = "hidden";
});

menuClose.addEventListener('click', function() {
  leftMenu.classList.toggle('left-menu--open');
  document.body.style.overflow = "";
});

menuFog.addEventListener('click', function() {
  leftMenu.classList.toggle('left-menu--open');
  document.body.style.overflow = "";
});





