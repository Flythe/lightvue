import LvInput from 'lightvue/input';
import LvButton from 'lightvue/button';
import LvCard from 'lightvue/card';
import LvToast from 'lightvue/toast';
import LvCollapsible from 'lightvue/collapsible';
import LvNotification from 'lightvue/notification';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(LvToast);
    nuxtApp.vueApp.use(LvNotification);

    nuxtApp.vueApp.component('LvInput', LvInput);
    nuxtApp.vueApp.component('LvButton', LvButton);
    nuxtApp.vueApp.component('LvCard', LvCard);
    nuxtApp.vueApp.component('LvCollapsible', LvCollapsible);
    nuxtApp.vueApp.provide('$lightvue', { ripple: true });
})