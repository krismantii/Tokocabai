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
                    type="text"
                    required
                    placeholder="Masukan username"
                  ></b-form-input>
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
                    type="password"
                    required
                    placeholder="masukan password"
                  ></b-form-input>
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
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.hp"
                    type="number"
                    required
                    placeholder="masukan No.Handphone"
                  ></b-form-input>
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
        hp: ""
      },
      role: [
        { value: 1, text: "Petani cabai" },
        { value: 0, text: "Bukan petani cabai" }
      ],
      provinsi: [
        { value: "a", text: "Aceh" },
        { value: "b", text: "Bali" },
        { value: "c", text: "Petani cabai" },
        { value: "d", text: "Bangka Belitung" },
        { value: "e", text: "Banten" },
        { value: "f", text: "Gorontalo" },
        { value: "g", text: "Jakarta" },
        { value: "h", text: "Jambi" },
        { value: "i", text: "Jawa Barat" },
        { value: "j", text: "Jawa Tengah" },
        { value: "k", text: "Jawa Timur" },
        { value: "l", text: "Kalimantan Barat" },
        { value: "m", text: "Kalimantan Timur" },
        { value: "n", text: "Kalimantan Selatan" },
        { value: "o", text: "Kalimantan Tengah" },
        { value: "p", text: "Kalimantan Utara" },
        { value: "q", text: "Kepulauan Riau" },
        { value: "r", text: "Lampung" },
        { value: "s", text: "Maluku Utara" },
        { value: "t", text: "Maluku" },
        { value: "u", text: "Nusa Tenggara Barat" },
        { value: "v", text: "Nusa Tenggara Timur" },
        { value: "w", text: "Papua Barat" },
        { value: "x", text: "Papua" },
        { value: "y", text: "Riau" },
        { value: "z", text: "Sulawesi Selatan" },
        { value: "aa", text: "Sulawesi Tengah" },
        { value: "ab", text: "Sulawesi Tenggara" },
        { value: "ac", text: "Sulawesi Utara" },
        { value: "ad", text: "Sumatra Barat" },
        { value: "ae", text: "Sumatra Selatan" },
        { value: "af", text: "Sumatra Utara" },
        { value: "ag", text: "Yogyakarta" }
      ],
      show: true
    };
  },
  methods: {
    register() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
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
            }){
              success
            }
          }
        `
        }
      })
        .then(response => {
          console.log("Data :", response.data);
          this.validate = response.data.data.register.success;
          alert("Register Berhasil~ Silahkan login dengan akun baru!");
          this.$router.push("/login");
        })
        .catch(function(error) {
          alert("Data tidak sesuai!");
          console.log(error);
          console.log("error");
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/Login/main.css";
@import "../assets/Login/util.css";
</style>
