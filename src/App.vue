<template>
  <div id="app">

<router-view></router-view>
  </div>
</template>

<script>
import index from './components/index.vue'
import login from './components/login.vue'

export default {
  name: 'app',
  components: {
    login,
    index
  }
}
</script>

<style lang="scss">
@import '../src/styles/global.scss';
body{
  background-color: $white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
