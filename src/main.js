import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import '@fortawesome/fontawesome-free/js/all'
//Создаём глобальные переменные 
// const d=new Date()
// const m=d.getMonth()
// const y=d.getFullYear()



const app=createApp(App)
app.use(store)
app.use(router)
// app.config.globalProperties.$d={
//     dateNow:d,
//     monthNow:m,
//     yearNow:y
    
// }
// app.provide('dateNow',d)
// app.provide('monthNow', m)
app.mount('#app')
