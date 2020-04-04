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
              Register
            </span>
            <b-form @submit="onSubmit" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Nama:"
                label-for="input-1"
                description=""
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Masukan nama"
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
                id="input-group-3"
                label="Saya:"
                label-for="input-3"
              >
                <b-form-select
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Provinsi:"
                label-for="input-3"
              >
                <b-form-select
                  v-model="selected"
                  :options="provinsi"
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
              <b-button class="login100-form-btn" type="submit"
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
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: ""
      },
      options: [
        { value: "a", text: "Petani cabai" },
        { value: "b", text: "Bukan petani cabai" }
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
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style scoped>
@import "../assets/Login/main.css";
@import "../assets/Login/util.css";
</style>
