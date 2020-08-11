<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <b-alert show dismissible>
        Login untuk bisa akses semua fitur di website Tokocabai~ <b>&rArr;</b>
      </b-alert>
    </div>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span class="login100-form-title">
              Masuk
            </span>
            <b-form @submit="login" v-if="show">
              <v-text-field
                v-model="form.email"
                counter
                label="E-mail"
              ></v-text-field>
              <v-text-field
                v-model="form.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
            </b-form>
            <br />
            <div class="container-login100-form-btn">
              <b-button
                class="login100-form-btn"
                type="submit"
                @click="login"
                variant="primary"
                >Masuk</b-button
              >
            </div>

            <div class="flex-col-c p-t-30 p-b-40">
              <span class="txt1 p-b-9">
                Tidak punya akun?
              </span>

              <router-link to="/register" class="nav-link"
                >Daftar di sini</router-link
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
      form: {
        email: "",
        password: ""
      },
      show1: false,
      show: true,
      password: "Password"
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
