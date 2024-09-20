import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import '@/assets/index.css'

import en from './locales/en.json'
import ru from './locales/ru.json'

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages:{
        en,
        ru
    }
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(createMetaManager())
app.use(router)

app.mount('#app')
