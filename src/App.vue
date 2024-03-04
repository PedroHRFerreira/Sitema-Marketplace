<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TemplateHelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import TemplateHelloWorld from "./components/template/HelloWorld.vue";

export default {
  name: "App",
  components: {
    TemplateHelloWorld,
  },
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
