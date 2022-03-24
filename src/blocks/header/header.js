export default function headerScripts() {
  const burgerIcon = document.querySelector('.header__burger-icon')
  const burger = document.querySelector('.header__burger')
  burgerIcon.addEventListener('click', function () {
    burger.classList.add('header__burger--visible')
    document.documentElement.classList.add('no-scroll')
  })

  const closeBurgerIcon = document.querySelector('.header__burger-close')
  closeBurgerIcon.addEventListener('click', function () {
    burger.classList.remove('header__burger--visible')
    document.documentElement.classList.remove('no-scroll')
  })
}
