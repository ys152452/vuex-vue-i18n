<template>
  <div class="hello">
    <h1>{{$t('message.msg')}}</h1>
    <h2>{{contentText}}</h2>
    <img :src='"../assets/flag-"+locale+".png"'/>
  </div>
</template>

<script>
export default {
  computed: {
    locale() {
      return this.$store.state.locale;
    },
    contentText() {
      return this.$store.state.contentText;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
