import { createApp } from "vue";
import App from "./App.vue";
import './global.css';
import router from './router/index';
import axios from 'axios';
import { appAxios } from "./utils/appAxios";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
