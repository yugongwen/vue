import { createApp } from 'vue'
import App from './App.vue'
// import './index.css'
import router from './router/index'
createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router);
app.use('#app')
