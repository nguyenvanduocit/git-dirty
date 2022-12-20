import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./route";
import {loadStyle} from "@aiocean/shell";

const app =createApp(App)
app.use(router)
app.mount("#app");

loadStyle()
