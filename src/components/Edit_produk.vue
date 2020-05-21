<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>Edit Produk</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <div class="container">
      <b-form @submit="updateData" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Nama Produk: "
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="produk.name"
            type="text"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Kategori:" label-for="input-3">
          <b-form-select
            v-model="produk.category"
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
            v-model="produk.stockKG"
            type="number"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Harga/KG:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="produk.pricePerKG"
            type="number"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Deskripsi Produk:"
          label-for="input-2"
        >
          <b-form-textarea
            id="input-2"
            v-model="produk.description"
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
          <div>
            <img v-if="produk.photoURL" :src="produk.photoURL" />
          </div>
        </div>
        <br />
        <br />
        <div>
          <router-link
            :to="{
              name: 'Manajemen_produk',
              params: { token: token }
            }"
            @click.native="$router.go()"
          >
            <b-button class="mr-1">Kembali</b-button></router-link
          >
          <b-button class="mr-1" type="submit" variant="success"
            >Edit Produk</b-button
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
      slug: [],
      imageData: [],
      form: {
        category: ""
      },
      //dataku merupakan variabel yg menampung data array JSON
      produk: {
        pricePerKG: null,
        name: "",
        description: "",
        stockKG: null
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
    updateData() {
      const slug = this.sanitizeTitle(this.produk.name);
      const formData = new FormData();
      const query = {
        query: `
            mutation updateProduct($id: Int!,$shopID: Int!, $name: String!, $slugName: String!, $category: String!, $pricePerKG: Int!, $stockKG: Float!, $photo: Upload, $description: String!){
                updateProduct(params: {
                  id: $id
                  shopID: $shopID
                  name : $name
                  pricePerKG: $pricePerKG
                  stockKG : $stockKG
                  slugName : $slugName
                  category: $category
                  description: $description
                  photo: $photo
                }) {
                  id
                  photoURL
                }
              }
        `,
        variables: {
          id: parseInt(this.$route.params.id),
          shopID: parseInt(this.user.id),
          name: this.produk.name,
          pricePerKG: parseInt(this.produk.pricePerKG),
          stockKG: parseFloat(this.produk.stockKG),
          slugName: slug,
          category: this.produk.category,
          description: this.produk.description,
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
        url: "http://localhost:4000/query",
        data: formData
      }).then(response => {
        console.log("Data :", response.data);
        if (response.data.errors == null) {
          alert("Data produk berhasil diedit!");
          this.$router.push(
            { name: "Manajemen_produk", params: { token: token } },
            this.$router.go(0)
          );
        }
        alert("Data masih belum benar");
      });
    },
    loadDataProduk() {
      axios({
        method: "post",
        url: "http://localhost:4000/query",
        data: {
          query: `
            {
            product(params: {
              id: ${this.$route.params.id}
            }) {
              shopID
              name
              pricePerKG
              stockKG
              description
              category
              photoURL
            }
          }
        `
        }
      }).then(response => {
        console.log("Data produk :", response.data);
        this.produk = response.data.data.product;
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
          this.user = response.data.data.getUserInfo;
          this.loadDataProduk();
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    previewImage: function(event) {
      const file = event.target.files[0];
      this.image = file;
      this.produk.photoURL = URL.createObjectURL(file);
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
