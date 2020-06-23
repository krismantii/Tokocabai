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
                Register
              </span>
              <b-form @submit="register" v-if="show">
                <b-form-group
                  id="input-group-1"
                  label="Username:"
                  label-for="input-1"
                  description=""
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.username"
                    :state="validation_username"
                    type="text"
                    required
                    placeholder="Masukan username"
                  ></b-form-input>
                  <b-form-invalid-feedback :state="validation_username">
                    min 6 karakter.
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validation_username">
                    Looks Good.
                  </b-form-valid-feedback>
                </b-form-group>
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
                    placeholder="masukan email"
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
                    :state="validation_password"
                    type="password"
                    required
                    placeholder="masukan password"
                  ></b-form-input>
                  <b-form-invalid-feedback :state="validation_password">
                    min 6 karakter.
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validation_password">
                    Looks Good.
                  </b-form-valid-feedback>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Nama lengkap:"
                  label-for="input-1"
                  description=""
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Masukan nama lengkap"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-3"
                  label="Saya:"
                  label-for="input-3"
                >
                  <b-form-select
                    v-model="form.role"
                    :options="role"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="No. Hp:"
                  label-for="input-1"
                  description=""
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.hp"
                    type="text"
                    required
                    placeholder="Masukan No.Hp"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Alamat :"
                  label-for="input-2"
                >
                  <b-form-textarea
                    id="input-2"
                    v-model="form.alamat"
                    type="text"
                    rows="5"
                    required
                    placeholder=" Masukan alamat tempat tinggal"
                  ></b-form-textarea>
                </b-form-group>
              </b-form>
              <div class="flex-col-c p-t-10 p-b-40"></div>
              <div class="container-login100-form-btn">
                <b-button
                  class="login100-form-btn"
                  @click="register"
                  type="submit"
                  >Submit</b-button
                >
              </div>
              <div class="flex-col-c p-t-30 p-b-40">
                <span class="txt1 p-b-9">
                  Sudah punya akun?
                </span>

                <router-link to="/login">login di sini</router-link>
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
      form: {
        username: "",
        email: "",
        name: "",
        password: "",
        hp: "",
        alamat: ""
      },
      role: [
        { value: 2, text: "Petani cabai" },
        { value: 1, text: "Bukan petani cabai" }
      ],
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
