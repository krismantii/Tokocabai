<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>Edit Profil</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <div class="container">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Nama :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Email :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            :disabled="!Boolean(ready)"
            type="email"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Password :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.password"
            type="password"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Saya:" label-for="input-3">
          <b-form-select
            v-model="selected"
            :options="options"
            :disabled="!Boolean(ready)"
          ></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-3" label="Provinsi:" label-for="input-3">
          <b-form-select v-model="selected" :options="provinsi"></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Alamat Lengkap :"
          label-for="input-2"
        >
          <b-form-textarea
            id="input-2"
            v-model="form.deskripsi"
            type="text"
            rows="5"
            required
            placeholder=""
          ></b-form-textarea>
        </b-form-group>
        <b-form-group id="input-group-1" label="Kode pos :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.hp"
            type="number"
            required
            placeholder="masukan No.Handphone"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="No. Hp:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.hp"
            type="number"
            required
            placeholder="masukan No.Handphone"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Foto profil:"
          label-for="input-2"
        >
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </b-form-group>

        <b-button type="submit" variant="success">Edit Profil</b-button>
      </b-form>
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
        password: "",
        file: null
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
>
