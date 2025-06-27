import { createApp } from 'vue'  // Vue 3 only
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import en from './locales/en.json'
import de from './locales/de.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en, de }
})

createApp(App)
    .use(i18n)
    .mount('#app')