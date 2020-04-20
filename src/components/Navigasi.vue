<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container">
      <router-link to="/" class="navbar-brand js-scroll-trigger">
        Tokocabai</router-link
      >
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto my-2 my-lg-0">
          <li class="nav-item">
            <router-link
              to="/shop"
              @click.native="$router.go()"
              class="nav-link"
            >
              Shop</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/produk" class="nav-link"> Produk</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop_detail" class="nav-link">
              Shop detail</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Promo</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Chat</router-link>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto my-2 my-lg-0">
          <span v-if="isLoggedIn">
            <li class="nav-item">
              <button @click="logout" class="nav-link">Logout</button>
            </li>
          </span>
          <span v-if="isLoggedIn == ''">
            <li class="nav-item">
              <router-link
                to="/login"
                class="nav-link"
                @click.native="$router.go()"
              >
                Login</router-link
              >
            </li>
          </span>
          <span v-if="isLoggedIn == ''">
            <li class="nav-item">
              <router-link
                to="/register"
                class="nav-link"
                @click.native="$router.go()"
              >
                Register</router-link
              >
            </li>
          </span>
          <span v-if="isLoggedIn">
            <li class="org">
              <router-link
                to="/Profil"
                @click.native="$router.go()"
                class="fas fa-user my-cart-icon"
              ></router-link>
            </li>
          </span>
          <span v-if="isLoggedIn">
            <li class="cart">
              <router-link
                to="/Keranjang"
                @click.native="$router.go()"
                class="fas fa-shopping-cart my-cart-icon"
                ><span class="badge badge-notify my-cart-badge"></span
              ></router-link>
            </li>
          </span>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import "../assets/Shop/font-awesome.css";
@import "../assets/navigasi.css";
</style>

<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  data() {
    return {
      //dataku merupakan variabel yg menampung data array JSON
      dataku: [],
      token
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    loadData() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            query{
                getUserInfo(token:
                  "${token}"
                ){
                  id
                }
              }
        `
        }
      })
        .then(response => {
          console.log("Data user:", response.data);
          this.dataku = response.data.data.getUserInfo;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    }
  }
};
</script>
