<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"
      ></loading>

      <label><input type="checkbox" v-model="fullPage" />Full page?</label>
      <button @click.prevent="doAjax">fetch Data</button>
    </div>
  </div>
</template>

<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import gql from "graphql-tag";
export default {
  components: {
    Loading
  },
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  apollo: {
    User: gql`
      query {
        User {
          id
          name
        }
      }
    `
  },
  methods: {
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 10000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
