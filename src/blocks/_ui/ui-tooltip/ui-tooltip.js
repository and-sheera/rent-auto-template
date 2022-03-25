import tippy from 'tippy.js'

export default function uiTooltip() {
  const tooltips = document.querySelectorAll('.ui-tooltip .ui-tooltip__icon')
  tippy(tooltips, {
    content(reference) {
      const content = reference.nextElementSibling
      return content.innerHTML
    },
    allowHTML: true,
    appendTo: 'parent',
    trigger: 'mouseenter focus',
    interactive: true,
    theme: 'ui-tooltip',
    offset: [-100, 10],
    maxWidth: 300
  })
  $(document).on('click', '.ui-tooltip__btn', function (event) {
    event.preventDefault()
  })
}
