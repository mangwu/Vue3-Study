import './assets/main.css';

import { createApp } from 'vue';
import Example1 from './components/Example1.vue';
import Example2 from './components/Example2.vue';
import App from './App.vue';
const appInstance = createApp(App);
appInstance
  .component('Example1', Example1)
  .component('Example2', Example2)
  .mount('#app');
