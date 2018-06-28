<template>
  <div id="app">
<router-view></router-view>
  </div>
</template>

<script>
import login from "./components/login.vue";

export default {
  name: "app",
  components: {
    login
  },
  data() {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss">
@import "../src/styles/global.scss";
body{
    background-color: $light-gray;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 100vh;

  margin:0px 10px;
}
</style>
