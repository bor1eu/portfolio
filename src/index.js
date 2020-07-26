import Vue from 'vue';

import router from './router/router.js';
import App from './components/App.vue';

new Vue ({
    router,
    render: h => h(App)
}).$mount('#app');