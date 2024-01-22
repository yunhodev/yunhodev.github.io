import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
//import axios from 'axios'

createApp(App).use(router).mount('#app')
