import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";
import "./assets/reset.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {store} from "@/store/store";
import 'v-calendar/dist/style.css';
import VCalendar from "v-calendar";
import {router} from "@/router";

createApp(App)
    .use(router)
    .use(VCalendar, {})
    .use(store)
    .mount('#app')
