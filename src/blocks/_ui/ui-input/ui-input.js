import IMask from 'imask'

export default function uiInput() {
  const timeInput = [...document.querySelectorAll('.ui-input--time input')]
  if (timeInput) {
    for (const input of timeInput) {
      IMask(input, {
        mask: 'hh:mm',
        lazy: false,
        placeholderChar: '-',
        blocks: {
          hh: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 23,
            maxLength: 2
          },
          mm: {
            mask: IMask.MaskedRange,
            from: 0,
            to: 59,
            maxLength: 2
          }
        }
      })
    }
  }
}
