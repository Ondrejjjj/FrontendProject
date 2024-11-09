import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

// Vytvorte Vuetify inštanciu
const vuetify = createVuetify({
    components,
    directives,
})

// Použite Pinia, Vuetify a Router na existujúcu inštanciu aplikácie
app.use(createPinia())
app.use(router)
app.use(vuetify)

// Montujte aplikáciu na DOM
app.mount('#app')
