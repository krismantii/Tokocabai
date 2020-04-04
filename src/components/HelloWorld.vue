<template>
  <div class="container" style="margin-top:10%">
    <br />
    <br />
    <br />
    <br />
    <div v-for="movie in movies" :key="movie.id">{{ movie.id }}</div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      movies: [
        {
          id: "123123123",
          title: "Harry Potter and the Order of the Phoenix",
          director: "David Yates",
          composer: "Nicholas Hopper",
          release_date: "2007-07-11"
        }
      ]
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
