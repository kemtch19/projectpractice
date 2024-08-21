<template>
  <!-- Como tal esto es para colocar información entre componentes -->
  <router-link to="/">Home</router-link>
  <router-link to="/list"> List</router-link>
  <router-view></router-view>
</template>

<!-- para cambiar de manera dinámica entre vistas utilizamos vue router -->
<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
