import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import '@/styles/index.css'
import 'element-plus/dist/index.css'

import App from '@/App.vue'
import { auth } from '@/api/common'
import router from '@/router'
import registerComponents from '@/components/registerComponents'

const authorized = document.cookie.includes('_identity')

if (authorized) {
  const app = createApp(App)
    .use(router)
    .use(ElementPlus, { size: 'default' })
    .use(createPinia())

  registerComponents(app)

  app.mount('#app')
} else {
  auth()
}
