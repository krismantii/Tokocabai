<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <div class="spec">
      <h3>Edit Review</h3>
      <div class="ser-t">
        <b></b>
        <span><i></i></span>
        <b class="line"></b>
      </div>
    </div>
    <b-form @submit="edit_review" v-if="show">
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
        <div class="image-preview">
          <img class="preview" :src="form.photoURL" />
        </div>
      </div>
      <br />
      <br />
      <b-button variant="danger" class="m-1" @click="deleteReview()">
        Hapus review
      </b-button>
      <b-button class="mr-1" type="submit" variant="success"
        >Edit review</b-button
      >
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
      produk: [],
      token,
      user: [],
      image: null,
      imageData: "",
      form: {
        title: "",
        content: "",
        photoURL: null,
        rating: null
      },
      show: true
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    edit_review() {
      const formData = new FormData();
      const query = {
        query: `mutation updateReview($id: String!,$userID: String!,$shopID: String!,$productID: String!,$title: String!, 
        $content: String!, $rating: Float!, $photo: Upload){
            updateReview(params:{
                id: $id
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
          id: this.$route.params.id,
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
      const file = this.image;
      formData.append("0", file);
      axios({
        method: "post",
        url: "http://103.133.56.19:17420/query",
        data: formData,
        headers: {
          "content-type": "multipart/form-data"
        }
      }).then(response => {
        console.log("data review baru:", response.data);
        if (response.data.errors == null) {
          alert("Data review berhasil diedit!");
          this.$router.push({ name: "History", params: { token: token } }, () =>
            this.$router.go(0)
          );
        }
        alert("Data review gagal diedit!");
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
          this.reviews();
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    reviews() {
      axios({
        method: "post",
        url: "http://103.133.56.19:17420/query",
        data: {
          query: `
                  {
          review(reviewId: ${this.$route.params.id}) {
            id
            userID
            productID
            title
            content
            photoURL
            rating
            createdAt
          }
        }
        `
        }
      })
        .then(response => {
          console.log("Data review:", response.data);
          this.form = response.data.data.review;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    deleteReview() {
      axios({
        method: "post",
        url: "http://103.133.56.19:17420/query",
        data: {
          query: `
          mutation{
          deleteReview(params: {
            id: "${this.$route.params.id}"
            userID: "${this.user.id}"
          }){
            success
          }
        }
        `
        }
      }).then(response => {
        alert("Data review berhasil dihapus!");
        console.log("Data hapus review :", response.data);
        this.$router.push({ name: "History", params: { token: token } }, () =>
          this.$router.go(0)
        );
      });
    },
    previewImage: function(event) {
      const file = event.target.files[0];
      this.image = file;
      this.form.photoURL = URL.createObjectURL(file);
    }
  }
};
</script>
