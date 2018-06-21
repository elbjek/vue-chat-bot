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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: $white;
  // width:1440px;
  // background-color: red;
}
</style>
