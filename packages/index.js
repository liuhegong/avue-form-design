import Config from './config'
import FormDesign from './index.vue'

import { getAsVal } from './utils/index.js'

export default {
  install (Vue) {
    Vue.use(Config)
    Vue.component('Avue' + FormDesign.name, FormDesign);

    Vue.prototype.getAsVal = getAsVal
  }
}
