import { createApp } from 'vue'
import { createPinia } from 'pinia'

import NaiveUiForm from 'naive-ui-form'

import NaiveUiUpload from 'naive-ui-upload'

import App from './App.vue'
import router from './router'
import to from 'await-to-js'

const app = createApp(App)

app.use(NaiveUiUpload, {
  requestFunc() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('https://picsum.photos/200/300')
      }, 1000)
    })
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
