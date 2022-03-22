export default function goodsBlock() {
  if (document.querySelector('.goods')) {
    const goodsUnvisibleItems = [...document.querySelectorAll('.goods__item--mb-unvisible')]
    const showMoreButton = document.querySelector('.goods__more-btn')
    showMoreButton.addEventListener('click', function () {
      for (const element of goodsUnvisibleItems) {
        element.classList.remove('goods__item--mb-unvisible')
      }
      showMoreButton.classList.add('goods__more-btn--hidden')
    })
  }
}
