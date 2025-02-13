// Destructuring => {} : récupérer ce dont on a besoin
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeVue from './pages/HomeVue.vue';
import LoginVue from './pages/LoginVue.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: HomeVue
        },
        {
            path: '/login',
            component: LoginVue
        }
    ]
});

export default router;