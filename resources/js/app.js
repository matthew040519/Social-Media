import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router/main.js'

createApp(App)
  .use(router)
  .mount('#app')