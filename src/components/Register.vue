<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">
                Daftar Sekarang
              </span>
              <b-form @submit="register" v-if="show">
                <v-text-field
                  v-model="form.username"
                  counter
                  hint="Minimum 6 karakter"
                  label="Username"
                ></v-text-field>
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
                  hint="Minimum 6 karakter"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
                <b-form-group label="Apakah anda petani cabai?">
                  <b-form-radio v-model="form.role" name="some-radios" value="2"
                    >Ya</b-form-radio
                  >
                  <b-form-radio v-model="form.role" name="some-radios" value="1"
                    >Bukan</b-form-radio
                  >
                </b-form-group>
                <v-text-field
                  v-model="form.hp"
                  counter
                  label="No.Hp"
                ></v-text-field>
              </b-form>
              <div class="flex-col-c p-t-10 p-b-40"></div>
              <div class="container-login100-form-btn">
                <b-button
                  class="login100-form-btn"
                  @click="register"
                  type="submit"
                  >Daftar</b-button
                >
              </div>
              <div class="flex-col-c p-t-30 p-b-40">
                <span class="txt1 p-b-9">
                  Sudah punya akun?
                </span>

                <router-link to="/login">Masuk di sini</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      validate: [],
      show1: false,
      password: "Password",
      form: {
        username: "",
        email: "",
        name: "",
        password: "",
        hp: "",
        alamat: "",
        role: ""
      },
      show: true
    };
  },
  computed: {
    validation_username() {
      return this.form.username.length > 5;
    },
    validation_password() {
      return this.form.password.length > 5;
    }
  },
  methods: {
    register() {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
           mutation{
            register(params:{
              userName: "${this.form.username}"
              email :"${this.form.email}"
              password: "${this.form.password}"
              phoneNumber: "${this.form.hp}"
              fullName: "${this.form.name}"
              role: ${this.form.role}
              addressDetail: "${this.form.alamat}"
            }){
              id
            }
          }
        `
        }
      }).then(response => {
        console.log("Data register:", response.data);
        if (response.data.errors == null) {
          alert("Register Berhasil~ Silahkan login dengan akun baru!");
          this.$router.push("/login");
        } else if (
          response.data.errors[0].message ==
          "rpc error: code = Unknown desc = email or username already exists"
        ) {
          alert("Email atau username sudah dipakai");
        } else {
          alert("Data tidak sesuai");
        }
      });
    }
  }
};
</script>

<style scoped>
@import "../assets/Login/main.css";
@import "../assets/Login/util.css";
</style>
