import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { RouterLink } from 'vue-router';

import LvButton from 'lightvue/button';
import LvToast from 'lightvue/toast';
import LvNotification from 'lightvue/notification';
import LvInput from 'lightvue/input';

const app = createApp(App).use(router);
app.config.globalProperties.$listeners = '';
app.use(LvToast);
app.use(LvNotification);

app.component('NuxtLink', RouterLink);
app.component('LvButton', LvButton);
app.component('LvInput', LvInput);

app.mount('#app');
