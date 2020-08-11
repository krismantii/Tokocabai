/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Shop from "@/components/Shop.vue";
import Keranjang from "@/components/Keranjang.vue";
import Produk from "@/components/Produk.vue";
import Profil from "@/components/Profil.vue";
import Edit_profil from "@/components/Edit_profil.vue";
import Edit_produk from "@/components/Edit_produk.vue";
import Edit_review from "@/components/Edit_review.vue";
import Manajemen_toko from "@/components/Manajemen_toko.vue";
import Manajemen_produk from "@/components/Manajemen_produk.vue";
import Tambah_produk from "@/components/Tambah_produk.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Resource from "@/components/Resources.vue";
import Shop_detail from "@/components/Shop_detail.vue";
import Topup_history from "@/components/Topup_history.vue";
import History from "@/components/History.vue";
import Review from "@/components/Review.vue";
import store from "@/store/index.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Shop",
    component: Shop
  },
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/about",
    name: "Home",
    component: Home
  },
  {
    path: "/produk/:slug/:id/:shopid",
    name: "Produk",
    component: Produk
  },
  {
    path: "/keranjang/:token",
    name: "Keranjang",
    component: Keranjang
  },
  {
    path: "/profil/:token",
    name: "Profil",
    component: Profil
  },
  {
    path: "/edit_profil/:token",
    name: "Edit_profil",
    component: Edit_profil
  },
  {
    path: "/edit_review/:id/:shopid/:produkid/:token",
    name: "Edit_review",
    component: Edit_review
  },
  {
    path: "/review/:produkid/:shopid/:token",
    name: "Review",
    component: Review
  },
  {
    path: "/manajemen_toko/:token",
    name: "Manajemen_toko",
    component: Manajemen_toko
  },
  {
    path: "/tambah_produk",
    name: "Tambah_produk",
    component: Tambah_produk
  },
  {
    path: "/manajemen_produk/:token",
    name: "Manajemen_produk",
    component: Manajemen_produk
  },
  {
    path: "/edit_produk/:slug/:id",
    name: "Edit_produk",
    component: Edit_produk
  },
  {
    path: "/shop_detail/:id",
    name: "Shop_detail",
    component: Shop_detail
  },
  {
    path: "/resources",
    name: "resources",
    component: Resource,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/topup_history/:token",
    name: "Topup_history",
    component: Topup_history
  },
  {
    path: "/history/:token",
    name: "History",
    component: History
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
