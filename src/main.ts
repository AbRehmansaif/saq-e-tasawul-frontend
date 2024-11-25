import { createApp } from 'vue';
import './style.css';
import './assets/css/style-prefix.css';
import './assets/css/style.css';
import App from './App.vue';

import { NConfigProvider } from 'naive-ui';

const app = createApp(App);

const themeOverrides = {
  Button: {
    border: 'none', // For Button components
  },
  Input: {
    border: 'none', // For Input components
  },
  common: {
    border: 'none ', // This applies to general shared variables, but not specific to components
  },
};

app.component('NConfigProvider', NConfigProvider);
app.mount('#app');
