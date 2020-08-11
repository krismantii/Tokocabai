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
      <b-form @submit="updateData" v-if="show">
        <b-form-group id="input-group-1" label="Nama :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.name"
            type="text"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Username :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.userName"
            :readonly="user.id >= 1"
            type="text"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Email :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.email"
            :readonly="user.id >= 1"
            type="email"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Provinsi:" label-for="input-3">
          <b-form-select
            v-model="user.province"
            :options="provinsi"
            required
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Alamat Lengkap :"
          label-for="input-2"
        >
          <b-form-textarea
            id="input-2"
            v-model="user.addressDetail"
            type="text"
            rows="5"
            required
            placeholder=""
          ></b-form-textarea>
        </b-form-group>
        <b-form-group id="input-group-1" label="kode zip :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.zipCode"
            type="number"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="No. Hp:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.phone"
            type="text"
            required
            placeholder="masukan No.Handphone"
          ></b-form-input>
        </b-form-group>
        <span v-if="user.type == 2">
          <b-form-group
            id="input-group-2"
            label="Deskripsi toko :"
            label-for="input-2"
          >
            <b-form-textarea
              id="input-2"
              v-model="user.description"
              type="text"
              rows="5"
              required
              placeholder=""
            ></b-form-textarea>
          </b-form-group>
        </span>
        <br />
        <br />
        <div>
          <div class="file-upload-form">
            Upload foto profil:
            <input type="file" @change="previewImage" accept="image/*" />
          </div>
          <div class="image-preview">
            <img v-if="user.photoURL" :src="user.photoURL" />
          </div>
        </div>
        <br />
        <br />
        <hr />
        <b-alert show dismissible variant="danger">
          Isi kolom "password baru" jika ingin mengganti password anda
        </b-alert>
        <b-form-group id="input-group-1" label="Password :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="dataku.password"
            type="password"
            required
            placeholder="Isi password sebelum edit"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Password Baru :"
          label-for="input-1"
        >
          <b-form-input
            ref="password"
            v-model="dataku.newPassword"
            type="password"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Ulangi password baru :"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="dataku.newPassword2"
            :state="validation_pw"
            type="password"
            placeholder=""
          ></b-form-input>
          <b-form-invalid-feedback :state="validation_pw">
            min 6 karakter.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation_pw">
          </b-form-valid-feedback>
        </b-form-group>
        <hr />
        <br />
        <b-alert show dismissible variant="danger"
          >Password wajib diisi sebelum edit data !</b-alert
        >
        <div>
          <router-link
            :to="{
              name: 'Profil',
              params: { token: token }
            }"
            @click.native="$router.go()"
          >
            <b-button class="mr-1 warna">Kembali</b-button></router-link
          >
          <b-button class="mr-1 warna" type="submit" variant="success"
            >Edit Profil</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>
<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  data() {
    return {
      token,
      image: [],
      dataku: {
        password: "",
        newPassword: "",
        newPassword2: ""
      },
      options: [
        { value: 0, text: "Enabled" },
        { value: 1, text: "Disabled" }
      ],
      imageData: [],
      user: [],
      provinsi: [
        { value: null, text: "Please select an option" },
        { value: "Aceh", text: "Aceh" },
        { value: "Bali", text: "Bali" },
        { value: "Bengkulu", text: "Bengkulu" },
        { value: "Bangka Belitung", text: "Bangka Belitung" },
        { value: "Banten", text: "Banten" },
        { value: "Gorontalo", text: "Gorontalo" },
        { value: "Jakarta", text: "Jakarta" },
        { value: "Jambi", text: "Jambi" },
        { value: "Jawa Barat", text: "Jawa Barat" },
        { value: "Jawa Tengah", text: "Jawa Tengah" },
        { value: "Jawa Timur", text: "Jawa Timur" },
        { value: "Kalimantan Barat", text: "Kalimantan Barat" },
        { value: "Kalimantan Timur", text: "Kalimantan Timur" },
        { value: "Kalimantan Selatan", text: "Kalimantan Selatan" },
        { value: "Kalimantan Tengah", text: "Kalimantan Tengah" },
        { value: "Kalimantan Utara", text: "Kalimantan Utara" },
        { value: "Kepulauan Riau", text: "Kepulauan Riau" },
        { value: "Lampung", text: "Lampung" },
        { value: "Maluku Utara", text: "Maluku Utara" },
        { value: "Maluku", text: "Maluku" },
        { value: "Nusa Tenggara Barat", text: "Nusa Tenggara Barat" },
        { value: "Nusa Tenggara Timur", text: "Nusa Tenggara Timur" },
        { value: "Papua Barat", text: "Papua Barat" },
        { value: "Papua", text: "Papua" },
        { value: "Riau", text: "Riau" },
        { value: "Sulawesi Selatan", text: "Sulawesi Selatan" },
        { value: "Sulawesi Tengah", text: "Sulawesi Tengah" },
        { value: "Sulawesi Tenggara", text: "Sulawesi Tenggara" },
        { value: "Sulawesi Utara", text: "Sulawesi Utara" },
        { value: "Sumatra Barat", text: "Sumatra Barat" },
        { value: "Sumatra Selatan", text: "Sumatra Selatan" },
        { value: "Sumatra Utara", text: "Sumatra Utara" },
        { value: "Yogyakarta", text: "Yogyakarta" }
      ],
      show: true
    };
  },
  computed: {
    validation_pw() {
      return (
        this.dataku.newPassword2.length > 5 &&
        this.dataku.newPassword === this.dataku.newPassword2
      );
    }
  },
  created() {
    this.loadUser();
  },
  methods: {
    validate: function() {
      console.log(this.password.value === this.password2.value);
    },
    loadUser() {
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: {
          query: `
            query{
                getUserInfo(token:
                  "${token}"
                ){
                  id
                  name
                  userName
                  email
                  phone
                  photoURL
                  city
                  province
                  zipCode
                  addressDetail
                  description
                  type
                }
              }
        `
        }
      })
        .then(response => {
          this.user = response.data.data.getUserInfo;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    updateData() {
      const formData = new FormData();
      const query = {
        query: `
                mutation editProfile($fullName: String!,$password: String!,$newPassword: String!,$phoneNumber: String!,$province: String!,
                $addressDetail: String!,$zipCode: Int!, $description: String!,$photo: Upload){
                editProfile(params:{
                  fullName: $fullName
                  password: $password
                  newPassword:$newPassword
                  phoneNumber: $phoneNumber
                  province: $province
                  addressDetail:$addressDetail
                  zipCode: $zipCode
                  description: $description
                  photo: $photo
                }
                ){
                  id
                  photoURL
                  description
                }
              }
        `,
        variables: {
          fullName: this.user.name,
          password: this.dataku.password,
          newPassword: this.dataku.newPassword2,
          phoneNumber: this.user.phone,
          province: this.user.province,
          addressDetail: this.user.addressDetail,
          zipCode: parseInt(this.user.zipCode),
          description: this.user.description,
          photo: null
        }
      };
      formData.append("operations", JSON.stringify(query));
      const map = {
        "0": ["variables.photo"]
      };
      formData.append("map", JSON.stringify(map));
      const file = this.image;
      formData.append("0", file);
      axios({
        method: "post",
        url: "http://www.idzhar.live/query",
        data: formData
      }).then(response => {
        console.log("Data :", response.data);
        if (response.data.errors == null) {
          alert("Data profil berhasil diedit!");
          this.$router.push({ name: "Profil", params: { token: token } }, () =>
            this.$router.go(0)
          );
        } else {
          alert("Data masih belum benar!");
        }
      });
    },
    previewImage: function(event) {
      const file = event.target.files[0];
      this.image = file;
      this.user.photoURL = URL.createObjectURL(file);
    }
  }
};
</script>
<style scoped>
.gambar {
  width: 400px;
  height: 400px;
  object-fit: cover;
}
.warna {
  color: white;
}
</style>
