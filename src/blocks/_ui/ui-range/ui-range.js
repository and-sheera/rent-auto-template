import noUiSlider from 'nouislider'

export default function uiRange() {
  const ranges = document.querySelectorAll('.ui-range')

  for (const range of ranges) {
    const itemRange = range.querySelector('.ui-range-body')
    const minInp = Number.parseInt(range.dataset.min, 10)
    const maxInp = Number.parseInt(range.dataset.max, 10)
    const startTopInp = Number.parseInt(range.dataset.startTop, 10)
    const startBotInp = Number.parseInt(range.dataset.startBot, 10)

    noUiSlider.create(itemRange, {
      start: [startTopInp, startBotInp],
      connect: true,
      range: {
        min: minInp,
        max: maxInp
      }
    })

    const topValue = range.querySelector('.ui-range__val-lower')
    const botValue = range.querySelector('.ui-range__val-upper')

    itemRange.noUiSlider.on('update', function () {
      const [top, bot] = itemRange.noUiSlider.get()
      topValue.innerHTML = toString(top)
      botValue.innerHTML = toString(bot)
    })
  }
}

function toString(line) {
  return Number.parseInt(line, 10).toString().replace(/(\d{1,3}(?=(?:\d{3})+(?!\d)))/g, '$1 ')
}
