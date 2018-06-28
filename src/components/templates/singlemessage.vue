<template>

    <div class="single-message">

        <p v-text="usermessages.msg" v-if="usermessages.display" > </p>
   </div>

</template>

<script>
export default {
  name: "singlemessage",
  props: ["usermessages"],

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/global.scss";

.single-message {
  p{
    margin:0;
    padding:0;

  }

}
</style>
