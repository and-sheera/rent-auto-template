import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru'

export default function uiDatepicker() {
  // datepicker settings
  const tomorrowDate = new Date().setDate(new Date().getDate() + 1)
  const defaultSettings = {
    locale: Russian,
    dateFormat: 'd.m.Y',
    disableMobile: 'true',
    allowInput: true
  }
  const timeSettings = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time_24hr: true,
    // disableMobile: 'true',
    allowInput: true
  }

  // datepicker init
  const datepickersSingle = document.querySelectorAll('.ui-datepicker--single')
  const datepickersTime = document.querySelectorAll('.ui-datepicker--time')
  for (const datepicker of datepickersSingle) {
    const datepickerSingle = datepicker.querySelector('input')
    flatpickr(datepickerSingle, defaultSettings)
  }
  for (const datepicker of datepickersTime) {
    const datepickerTime = datepicker.querySelector('input')
    flatpickr(datepickerTime, timeSettings)
  }
}
