let brands = document.querySelector('.brands__wrapper')
let brandsButton = document.querySelector('.brands__button')

brandsButton.addEventListener('click', function () {
  brands.classList.toggle('brands__wrapper--hidden')
  brandsButton.textContent = 'Скрыть'
  brandsButton.classList.toggle('brands__button--open')
  if (brands.classList.contains('brands__wrapper--hidden')) {
    brandsButton.textContent = 'Показать все'
  }
})
