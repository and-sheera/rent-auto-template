import IMask from 'imask'

export default function uiInput() {
  inputMask()
  checkInputFill()
}

function inputMask() {
  const inputMaskItem = document.querySelector('#phone')
  if (inputMaskItem) {
    IMask(inputMaskItem, {
      mask: '+{7} (000) 000-00-00'
    })
  }
}

function checkInputFill() {
  const uiInputs = document.querySelectorAll('.ui-input')
  if (uiInputs) {
    for (const element of uiInputs) {
      const input = element.querySelector('input')
      input.value !== '' ? input.classList.add('filled') : input.classList.remove('filled')
      input.addEventListener('input', function () {
        input.value !== '' ? input.classList.add('filled') : input.classList.remove('filled')
      })
    }
  }
}
