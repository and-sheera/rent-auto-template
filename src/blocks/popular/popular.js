export default function popularBlock() {
  const popularUnvisibleItems = [...document.querySelectorAll('.popular__item--mb-unvisible')]
  const showMoreButton = document.querySelector('.popular__more-btn')
  showMoreButton.addEventListener('click', function () {
    for (const element of popularUnvisibleItems) {
      element.classList.remove('popular__item--mb-unvisible')
    }
    showMoreButton.classList.add('popular__more-btn--hidden')
  })
}
