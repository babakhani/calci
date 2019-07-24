// https://github.com/kazupon/vue-i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messages = {
  en: {
  app_name: 'Shalculator',
  golden_ratio: 'Golden Ratio',
  value_label: 'Enter value',
  mass_body_index: 'Mass Body Index',
  height_label: 'Your height',
  weight_label: 'Your weight',
  bmi_underWeight: 'You are Under weight',
  bmi_normal: 'You are Normal',
  bmi_overWeight: 'You are Overweight',
  bmi_obesity: 'You are Obesity',
  bmi_severeObesity: 'You are Severe obesity',
  data_storage_converter: 'Data Storage Converter',
  reset: 'Reset',
  back: 'Back'
  }
}
const i18n = new VueI18n({
  locale: 'en',
  messages
})
export default i18n
