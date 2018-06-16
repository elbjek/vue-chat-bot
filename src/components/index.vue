<template>
  <div class="hello">
<globalnavigation></globalnavigation>
  </div>
</template>

<script>
import globalnavigation from '../components/templates/globalnavigation.vue';
export default {
  name: 'index',
  components:{
    globalnavigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
