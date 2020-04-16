<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>Tambah Produk</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>

    <div class="container">
      <b-form @submit="createData" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Nama Produk:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            placeholder="masukan nama produk"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Kategori:" label-for="input-3">
          <b-form-select
            v-model="form.slugName"
            :options="slugName"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Stock tersedia (KG):"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model.number="form.stockKG"
            type="number"
            min="1"
            required
            placeholder="masukan stock barang dalam KG"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Harga/KG:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model.number="form.pricePerKG"
            type="number"
            min="1"
            required
            placeholder="masukan harga barang per/KG"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Deskripsi Produk:"
          label-for="input-2"
        >
          <b-form-textarea
            id="input-2"
            v-model="form.deskripsi"
            type="text"
            rows="5"
            required
            placeholder="Masukan deskripsi produk"
          ></b-form-textarea>
        </b-form-group>
        <br />
        <br />
        <div>
          <div class="file-upload-form">
            Upload an image file:
            <input type="file" @change="previewImage" accept="image/*" />
          </div>
          <div class="image-preview" v-if="imageData.length > 0">
            <img class="preview" :src="imageData" />
          </div>
        </div>
        <br />
        <br />
        <b-button type="submit" variant="success" class="m-1">
          Tambah produk
        </b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
const token = localStorage.getItem("token");
// import FormData from "form-data";
import axios from "axios";
export default {
  data() {
    return {
      imageData: "",
      contoh: null,
      token,
      user: [],
      //dataku merupakan variabel yg menampung data array JSON
      produk: [],
      form: {
        name: "",
        deskripsi: "",
        pricePerKG: null,
        stockKG: null,
        slugName: "",
        file: null
      },
      slugName: [
        { value: "1", text: "Cabai Merah Keriting" },
        { value: "2", text: "Cabai Merah Besar" },
        { value: "3", text: "Cabai rawit" }
      ],
      show: true
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    createData() {
      const formData = new FormData();
      const query = {
        query: `mutation createProduct($name: String!,$shopID: Int!, 
        $slugName: String!, $pricePerKG: Int!, $stockKG: Int!, $photo: Upload, 
        $description: String!){
              createProduct(params:{ 
              name: $name,
              shopID: $shopID,
              slugName: $slugName,
              pricePerKG: $pricePerKG,
              stockKG: $stockKG,
              photo: $photo,
              description: $deskripsi
              }){
                id
                photoURL
              }
            }
        `,
        variables: {
          name: this.form.name,
          shopID: this.user.id,
          slugName: this.form.slugName,
          pricePerKG: this.form.pricePerKG,
          stockKG: this.form.stockKG,
          photo: null,
          description: this.form.deskripsi
        }
      };
      formData.append("operations", JSON.stringify(query));
      const map = {
        "0": ["0.variables.photo"]
      };
      formData.append("map", JSON.stringify(map));
      const file = this.contoh;
      formData.append("0", file);
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: formData,
        headers: {
          "content-type": "multipart/form-data"
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
          alert("Data tidak sesuai!");
        });
    },
    loadUser() {
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
          console.log("Data :", response.data);
          this.user = response.data.data.getUserInfo;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    previewImage: function(event) {
      var file = event.target.files[0];
      this.contoh = file;
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    }
  }
};
</script>
