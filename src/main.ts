import { createApp } from 'vue';

import App from '@/App.vue';
import i18n from '@/plugins/i18n';
import { vuetify } from '@/plugins/vuetify';

const app = createApp(App);
app.use(vuetify);
app.use(i18n);

app.mount('#app');
