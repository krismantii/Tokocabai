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
            <router-link to="/shop" class="nav-link"> Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/produk" class="nav-link"> Produk</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Artikel</router-link>
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
          <li class="nav-item">
            <span v-if="isLoggedIn"
              ><a @click="logout" class="nav-link"> Logout</a></span
            >
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link"> Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link"> Register</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/profil"
              class="fas fa-user my-cart-icon"
            ></router-link>
          </li>
          <li class="cart">
            <router-link
              to="/keranjang"
              class="fas fa-shopping-cart my-cart-icon"
              ><span class="badge badge-notify my-cart-badge"></span
            ></router-link>
          </li>
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
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>
