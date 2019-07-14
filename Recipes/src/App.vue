<template>
  <div id="app">
    <Title></Title>
  <router-view></router-view>
  </div>
</template>

<script>
import About from './components/About'
import MyRecipes from './components/MyRecipes'
import SinglePage from './components/SinglePage'
import Title from './components/Title'

export default {
  name: 'App',
  components: {
    About,MyRecipes,SinglePage,Title
  }
}

</script>

<style>

</style>
