export default function headerScripts() {
  const burgerIcon = document.querySelector('.svg-icon--icon_burger')
  const burger = document.querySelector('.header__burger')
  burgerIcon.addEventListener('click', function () {
    burger.classList.add('header__burger--visible')
    document.documentElement.classList.add('no-scroll')
  })

  const closeBurgerIcon = document.querySelector('.svg-icon--icon_close')
  closeBurgerIcon.addEventListener('click', function () {
    burger.classList.remove('header__burger--visible')
    document.documentElement.classList.remove('no-scroll')
  })
}
