<template>
<v-app>
  <div id="app">
    <RecipeBox/>
  </div>
  </v-app>
</template>

<script>
import RecipeBox from './components/RecipeBox'
export default {
  name: "app",
  components: {
    RecipeBox
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
