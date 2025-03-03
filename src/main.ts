import { createApp } from 'vue'
import './style.css'
import 'normalize.css'
import App from './App.vue'
import naive from 'naive-ui'
import router from './router'
import { themeOverrides } from './config/theme.ts'

const app = createApp(App)
app.use(router)
app.use(naive)

app.provide('themeOverrides', themeOverrides)

app.mount('#app')
