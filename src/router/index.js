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
import Edit_toko from "@/components/Edit_toko.vue";
import Edit_produk from "@/components/Edit_produk.vue";
import Manajemen_toko from "@/components/Manajemen_toko.vue";
import Manajemen_produk from "@/components/Manajemen_produk.vue";
import Tambah_produk from "@/components/Tambah_produk.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Detail_transaksi from "@/components/Detail_transaksi.vue";
import Resource from "@/components/Resources.vue";
import Shop_detail from "@/components/Shop_detail.vue";
import Ganti_password from "@/components/Ganti_password.vue";
import store from "@/store/index.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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
    path: "/shop",
    name: "Shop",
    component: Shop
  },
  {
    path: "/produk/:slug/:id",
    name: "Produk",
    component: Produk
  },
  {
    path: "/keranjang",
    name: "Keranjang",
    component: Keranjang
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil
  },
  {
    path: "/edit_profil/:id",
    name: "Edit_profil",
    component: Edit_profil
  },
  {
    path: "/edit_toko",
    name: "Edit_toko",
    component: Edit_toko
  },
  {
    path: "/manajemen_toko",
    name: "Manajemen_toko",
    component: Manajemen_toko
  },
  {
    path: "/tambah_produk",
    name: "Tambah_produk",
    component: Tambah_produk
  },
  {
    path: "/manajemen_produk",
    name: "Manajemen_produk",
    component: Manajemen_produk
  },
  {
    path: "/edit_produk/:slug/:id",
    name: "Edit_produk",
    component: Edit_produk
  },
  {
    path: "/detail_transaksi",
    name: "Detail_transaksi",
    component: Detail_transaksi
  },
  {
    path: "/shop_detail/:id",
    name: "Shop_detail",
    component: Shop_detail
  },
  {
    path: "/ganti_password",
    name: "Ganti_password",
    component: Ganti_password
  },
  {
    path: "/resources",
    name: "resources",
    component: Resource,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
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
