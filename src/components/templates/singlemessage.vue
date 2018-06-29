<template>

    <div class="single-message">
        <p v-text="usermessages.msg" v-if="usermessages.display" :class="{isSent:usermessages.sent}"  > </p>
   </div>

</template>

<script>
export default {
  name: "singlemessage",
  props: ["usermessages"],
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.users = JSON.parse(localStorage.getItem("users"));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/global.scss";

.single-message {
  p {
    margin: 0;
    padding: 0;
  }
  .isSent {
    background-color: rgba($color: $gray, $alpha: 1);
    color: white;
    border-radius: 40px;
    padding: 0px 10px;
    font-size: 14px;
    font-weight: 100;
    width: 50%;
    float: right;
  }
}
</style>
