import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import { store } from "./store";

Vue.config.productionTip = false;
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import UpdateDetail from "./components/UpdateDetail";
Vue.use(VueRouter);
function gaurd(to, from, next) {
  if (localStorage.getItem("token")) {
    next();
  } else {
    next({ name: "SignIn" });
  }
}

const router = new VueRouter({
  routes: [
    {
      name: "Home",
      component: Home,
      path: "/home",
      beforeEnter: gaurd,

      children: [
        {
          path: "dashboard",
          component: DashBoard,
          beforeEnter: gaurd,
        },
        {
          path: "update",
          component: UpdateDetail,
          beforeEnter: gaurd,
        },
      ],
    },

    {
      name: "SignIn",
      component: SignIn,
      path: "/",
    },
    {
      name: "ForgetPassword",
      component: ForgetPassword,
      path: "/forget-password",
    },
    {
      name: "SignUp",
      component: SignUp,
      path: "/sign-up",
    },
    {
      name: "ResetPassword",
      component: ResetPassword,
      path: "/reset-password",
    },
  ],
});

new Vue({
  vuetify,
  router: router,
  store,
  render: (h) => h(App),
}).$mount("#app");
