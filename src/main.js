import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router' 
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ListView from './views/ListView.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/list',
            name: 'list',
            component: ListView
        }
    ]   
})

createApp(App).use(router).mount('#app')
