import Vue from 'vue';
import VueRouter from 'vue-router';

import About from '../components/About.vue';
import Projects from '../components/Projects.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'About',
        component: About,
        props: true
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
        props: true
    }
];

const router = new VueRouter
({
    mode: 'history',
    routes
});

export default router;

