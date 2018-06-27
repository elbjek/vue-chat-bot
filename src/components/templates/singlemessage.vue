<template>

    <div class="single-message">

        <p v-text="usermessages.msg" v-if="usermessages.display"  > </p>

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

.contacts {
  border: 1px solid $black;

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      a {
        .img-circle {
          max-width: 100px;
          max-height: 100px;
          // position: relative;
          overflow: hidden;
          border-radius: 50%;
          img {
            max-height: 120px;
            //  border-radius: 100%;
            border: 1px;
          }
        }
      }
    }
  }
  .isOnline{
    background-color:purple;
  }
}
</style>
