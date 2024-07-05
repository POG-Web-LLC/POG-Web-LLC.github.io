import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Logic for mobile navigation menu icon to function properly
const mobileNavMenu = document.querySelector('.mobile-nav-menu')
const menuIcon = document.querySelector('.mobile-nav-menu .menu-icon')
const closeIcon = document.querySelector('.mobile-nav-menu .close-icon')

menuIcon?.addEventListener('click', () => {
  mobileNavMenu?.classList.add('active')
})

closeIcon?.addEventListener('click', () => {
  mobileNavMenu?.classList.remove('active')
})
