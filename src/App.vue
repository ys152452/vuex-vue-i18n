<template>
  <div id="app">
    <button @click="langChangeHandle('en')">English</button>
    <button @click="langChangeHandle('cn')">中文</button>
    <input readonly v-model="locale"/><br>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    locale() {
      return this.$store.state.locale;
    }
  },
  methods: {
    'langChangeHandle': function (lang) {
      this.$i18n.locale = lang
      this.$store.commit('setLocale', lang)
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
