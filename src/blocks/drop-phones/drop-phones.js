// eslint-disable-next-line sonarjs/cognitive-complexity
export default function dropPhones() {
  const telButtons = [...document.querySelectorAll('.drop-phones__open')]
  const dropContentVisivleClass = 'drop-phones__drop--visible'
  for (const button of telButtons) {
    button.addEventListener('click', function () {
      this.classList.toggle('drop-phones__open--active')
      this.nextElementSibling.classList.toggle(dropContentVisivleClass)
    })
  }

  const dropContent = [...document.querySelectorAll('.drop-phones__drop')]
  document.addEventListener('click', (event) => {
    const target = event.target
    let itsDropContent = false
    let dropIsActive = false
    for (const element of dropContent) {
      if (target === dropContent || element.contains(target)) {
        itsDropContent = true
      }
      if (element.classList.contains(dropContentVisivleClass)) {
        dropIsActive = true
      }
    }
    let itsButton = false
    for (const element of telButtons) {
      if (target === element) {
        itsButton = true
      }
    }
    if (!itsDropContent && !itsButton && dropIsActive) {
      for (const button of telButtons) {
        button.classList.remove('drop-phones__open--active')
        button.nextElementSibling.classList.remove(dropContentVisivleClass)
      }
    }
  })
}
