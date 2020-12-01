import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home'
import DcHeros from './pages/DcHeros'
import Calendar from './pages/Calendar'
import Markdown from './pages/Markdown'
import Slider from './pages/Slider'
import Calculator from './pages/Calculator'
import ReusableModal from './pages/ReusableModal'
import Chat from './pages/Chat'
import store from  './store/index'

const routes = [
    {path: '/', component:Home},
    {path:'/dc-heros', component:DcHeros},
    {path: '/calendar', component:Calendar},
    {path: '/markdown', component:Markdown},
    {path: '/slider-carousel', component:Slider},
    {path: '/calculator', component:Calculator},
    {path: '/reusable-modal', component:ReusableModal},
    {path: '/chat',
     component:Chat, 
     beforeEnter: (_, __, next)=>{
        if(!store.state.isLoggedIn) {
            next("/");
        } else {
            next();
        }
    }},  

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
