import { createApp } from 'vue'
import { createPinia } from 'pinia'
import setupFontAwesome from './fontAwesome'

import './assets/main.scss'
import App from './App.vue'

const pinia = createPinia()
const FontAwesomeIcon = setupFontAwesome()

createApp(App)
  .use(pinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
