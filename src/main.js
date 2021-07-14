import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "element-plus/lib/theme-chalk/display.css";
import "./assets/style/app.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
