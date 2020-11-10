import { createRouter, createWebHistory } from 'vue-router';
import DcHeros from './pages/DcHeros'
import Calendar from './pages/Calendar'
import Home from './pages/Home'

const routes = [
    {path:'/dc-heros', component:DcHeros},
    {path: '/calendar', component:Calendar},
    {path: '/', component:Home},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
