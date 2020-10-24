import { createRouter, createWebHashHistory } from 'vue-router'
import DcHeros from './pages/DcHeros'
import calender from './pages/calender'
import Calculator from './pages/Calculator'
import markdown from './pages/markdown'
import Slider from './pages/Slider'
import chats from './pages/chats'

const routes = [{
        path: '/dc-heros',
        component: DcHeros
    }, { path: '/calender', component: calender },
    { path: '/calculator', component: Calculator },
    { path: '/markdown', component: markdown },
    { path: '/slider', component: Slider },
    {
        path: '/chats',
        component: chats,
        beforeEnter: () => {
            console.log('i am working');
        }
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;