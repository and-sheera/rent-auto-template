import { Fancybox } from '@fancyapps/ui'

export default function popupForm() {
  window.Fancybox = Fancybox
  Fancybox.bind('.js-popup-form', {
    mainClass: 'popup',
    showClass: 'fancybox-fadeIn',
    hideClass: 'fancybox-fadeOut',
    hideScrollbar: true,
    autoFocus: false,
    trapFocus: false,
    dragToClose: false
  })
  Fancybox.defaults.ScrollLock = false
}
