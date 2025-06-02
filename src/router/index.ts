import { createWebHashHistory, createRouter } from 'vue-router';
import home from '@/view/home.vue';
import about from '@/view/about.vue';

const routes = [
    { path: '/', name: 'home', component: home },
    { path: '/about', name: 'about', component: about }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;