import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import IntroductionView from "../views/IntroductionView";
import ProductView from "../views/ProductView";
import SSSView from "../views/SSSView";
import CommunacitionView from "../views/CommunacitionView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/introduction",
    name: "introduction",
    component: IntroductionView,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
  },
  {
    path: "/communacition",
    name: "communacition",
    component: CommunacitionView,
  },
  {
    path: "/sss",
    name: "sss",
    component: SSSView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
