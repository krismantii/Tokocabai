<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>Review</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <b-form @submit="Add_review" v-if="show">
      <b-form-group id="input-group-1" label="Judul:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
          placeholder="masukan judul review"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Rate:" label-for="input-1">
        <star-rating
          v-bind:increment="1"
          v-bind:max-rating="5"
          inactive-color="#000"
          active-color="yellow"
          v-bind:star-size="20"
          v-model="form.rating"
        >
        </star-rating>
      </b-form-group>
      <b-form-group id="input-group-2" label="Content:" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.content"
          type="text"
          rows="5"
          required
          placeholder="Masukan content review"
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
        Review produk
      </b-button>
    </b-form>
  </div>
</template>
<script>
const token = localStorage.getItem("token");
// import FormData from "form-data";
import StarRating from "vue-star-rating";
import axios from "axios";
export default {
  components: {
    StarRating
  },
  data() {
    return {
      review: [],
      token,
      user: [],
      gambar: null,
      imageData: "",
      form: {
        title: "",
        content: "",
        photo: null,
        rating: null
      },
      show: true
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    Add_review() {
      const formData = new FormData();
      const query = {
        query: `mutation createReview($userID: String!,$shopID: String!,$productID: String!,$title: String!, 
        $content: String!, $rating: Float!, $photo: Upload){
            createReview(params:{
                userID: $userID
                shopID: $shopID
                productID: $productID
                title: $title
                content: $content
                photo: $photo
                rating: $rating
              }){
                id
                photoURL
              }
            }
        `,
        variables: {
          userID: this.user.id,
          shopID: this.$route.params.shopid,
          productID: this.$route.params.produkid,
          title: this.form.title,
          content: this.form.content,
          photo: null,
          rating: parseFloat(this.form.rating)
        }
      };
      formData.append("operations", JSON.stringify(query));
      const map = {
        "0": ["variables.photo"]
      };
      formData.append("map", JSON.stringify(map));
      const file = this.gambar;
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
          console.log("data review :", response.data);
          alert("Produk berhasil direview!");
          this.review = response.data;
          this.$router.push(
            { name: "History", params: { token: token } },
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
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    previewImage: function(event) {
      var file = event.target.files[0];
      this.gambar = file;
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
