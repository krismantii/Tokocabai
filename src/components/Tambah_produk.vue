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
            v-model="form.category"
            :options="category"
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
            v-model="form.description"
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
            Upload foto produk:
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
      slug: [],
      user: [],
      //dataku merupakan variabel yg menampung data array JSON
      produk: [],
      form: {
        name: "",
        description: "",
        pricePerKG: null,
        stockKG: null,
        category: "",
        file: null
      },
      category: [
        { value: "Cabai Merah Keriting", text: "Cabai Merah Keriting" },
        { value: "Cabai Merah Besar", text: "Cabai Merah Besar" },
        { value: "Cabai Rawit", text: "Cabai Rawit" }
      ],
      show: true
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    createData() {
      const slug = this.sanitizeTitle(this.form.name);
      const formData = new FormData();
      const query = {
        query: `mutation createProduct($name: String!,$shopID: Int!,$slugName: String!, 
        $category: String!, $pricePerKG: Int!, $stockKG: Float!, $photo: Upload, 
        $description: String!){
              createProduct(params:{ 
              name: $name,
              shopID: $shopID,
              category: $category,
              slugName: $slugName
              pricePerKG: $pricePerKG,
              stockKG: $stockKG,
              photo: $photo,
              description: $description
              }){
                id
                photoURL
              }
            }
        `,
        variables: {
          name: this.form.name,
          shopID: parseInt(this.user.id),
          category: this.form.category,
          pricePerKG: this.form.pricePerKG,
          stockKG: this.form.stockKG,
          slugName: slug,
          photo: null,
          description: this.form.description
        }
      };
      formData.append("operations", JSON.stringify(query));
      const map = {
        "0": ["variables.photo"]
      };
      formData.append("map", JSON.stringify(map));
      const file = this.contoh;
      formData.append("0", file);
      axios({
        method: "post",
        url: "http://103.133.56.19:17420/query",
        data: formData,
        headers: {
          "content-type": "multipart/form-data"
        }
      })
        .then(response => {
          console.log("data produk baru :", response.data);
          alert("Produk berhasil ditambahkan!");
          this.$router.push(
            { name: "Manajemen_produk", params: { token: token } },
            () => () => this.$router.go(0)
          );
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
        url: "http://103.133.56.19:17420/query",
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
          this.user = response.data.data.getUserInfo;
          console.log(this.user.id);
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
    },
    sanitizeTitle: function(title) {
      var slug = "";
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e");
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
      // Letter "d"
      slug = slug.replace(/đ/gi, "d");
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, "");
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, "-");

      return slug;
    }
  }
};
</script>
