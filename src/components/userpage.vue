<template>
  <div class="hello">
      <usernavbar></usernavbar>
  </div>
</template>

<script>
import usernavbar from '../components/templates/usernavbar.vue';
export default {
  name: 'index',
  components:{
    usernavbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
