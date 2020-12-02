import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home'
import DcHeros from './pages/DcHeros'
import Calendar from './pages/Calendar'
import Markdown from './pages/Markdown'
import Slider from './pages/Slider'
import Calculator from './pages/Calculator'
import ReusableModal from './pages/ReusableModal'
import Chat from './pages/Chat'
import UserCrud from './pages/UserCrud'
import TensorFlow from './pages/TensorFlow'
import store from  './store/index'

const routes = [
    {path: '/', component:Home},
    {path:'/dc-heros', component:DcHeros},
    {path: '/calendar', component:Calendar},
    {path: '/markdown', component:Markdown},
    {path: '/slider-carousel', component:Slider},
    {path: '/calculator', component:Calculator, meta: {middleware:'auth'}},
    {path: '/reusable-modal', component:ReusableModal},
    {path: '/chat',
     component:Chat,
     meta: {middleware:'auth'},
    },
    {path: '/user-crud', component:UserCrud},
    {path: '/tensor-flow', component:TensorFlow},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _, next) => {
    if(to.meta.middleware) {
        const middleware = require (`./middleware/${to.meta.middleware}`);
        if(middleware){
            middleware.default(next,store);
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
