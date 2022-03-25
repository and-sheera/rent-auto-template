export default function goodsBlock() {
  if (document.querySelector('.goods .goods__more-btn')) {
    const goodsUnvisibleItems = [...document.querySelectorAll('.goods-item--mb-unvisible')]
    const showMoreButton = document.querySelector('.goods__more-btn')
    showMoreButton.addEventListener('click', function () {
      for (const element of goodsUnvisibleItems) {
        element.classList.remove('goods-item--mb-unvisible')
      }
      showMoreButton.classList.add('goods__more-btn--hidden')
    })
  }
}
