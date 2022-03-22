import $ from 'jquery'
import 'lazysizes'
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
import uiRange from '../blocks/_ui/ui-range/ui-range'
import uiSelects from '../blocks/_ui/ui-select/ui-select'
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea'
import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip'
import sliderInit from '../blocks/slider/slider'
import './_backend'
import goodsBlock from '../blocks/goods/goods'
import headerScripts from '../blocks/header/header'
import dropPhones from '../blocks/drop-phones/drop-phones'
import popupForm from '../blocks/popup-form/popup-form'

document.addEventListener('DOMContentLoaded', function () {
  uiDatepicker()
  uiRange()
  uiSelects()
  uiTextarea()
  uiTooltip()
  sliderInit()
  goodsBlock()
  headerScripts()
  dropPhones()
  popupForm()
})
