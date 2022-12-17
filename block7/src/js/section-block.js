let sectionBlockText = document.querySelector('.section-block__text');
let sectionBlockButton = document.querySelector('.section-block__button');

sectionBlockButton.addEventListener('click', function() {
  sectionBlockText.classList.toggle('section-block__text--open');
  sectionBlockButton.textContent = 'Скрыть';
  sectionBlockButton.classList.toggle('section-block__button--open');
  if (!sectionBlockText.classList.contains('section-block__text--open')) {
    sectionBlockButton.textContent = 'Читать далее';
  }
});