<template>
  <div id="app">
    <title>菜谱大全</title>
    <img src="./assets/logo.png">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {recipes}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
