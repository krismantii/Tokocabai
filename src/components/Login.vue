<template>
  <div>
    <br />
    <br />
    <br />
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span class="login100-form-title">
              Login
            </span>
            <b-form @submit="login" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Masukan email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Password:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Masukan password"
                ></b-form-input>
              </b-form-group>
            </b-form>
            <div class="text-right p-t-13 p-b-23">
              <span class="txt1">
                Lupa
              </span>

              <a href="#" class="txt2">
                Password?
              </a>
            </div>

            <div class="container-login100-form-btn">
              <b-button
                class="login100-form-btn"
                type="submit"
                @click="login"
                variant="primary"
                >Login</b-button
              >
            </div>

            <div class="flex-col-c p-t-30 p-b-40">
              <span class="txt1 p-b-9">
                Tidak punya akun?
              </span>

              <router-link to="/register" class="nav-link"
                >Register di sini</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      token: localStorage.getItem("token") || "",
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    login: function() {
      let email = this.form.email;
      let password = this.form.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/", () => this.$router.go(0)))
        .catch(function(error) {
          console.log(error);
          console.log("error");
          alert("Data tidak sesuai!");
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/Login/main.css";
@import "../assets/Login/util.css";
</style>
