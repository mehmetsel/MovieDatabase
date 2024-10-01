import './assets/main.css'
import './assets/tailwind.css';
import './index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
