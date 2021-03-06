import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import 'document-register-element'
import filters from './filters'
import plugins from './plugins'
import mixins from './mixins'
import components from './components'

/* Register Filters */
Object.entries(filters).forEach((filter) => {
  Vue.use(...filter)
})

/* Register Mixins */
mixins.forEach((mixin) => {
  Vue.mixin(mixin)
})

/* Register Plugins */
plugins.forEach((plugin) => {
  Vue.use(plugin)
})

/* Register Components */
Object.entries(components).forEach(
  (component) => {
    const [name, module] = component
    module.store = store
    module.mixins = mixins
    Vue.customElement(name, module)
  }
)
