<template>
<div>       
    <div class="single-message">
        <p v-text="usermessages.msg" v-if="usermessages.display" :class="{isSent:usermessages.sent}"  > </p>
   </div>
</div>
</template>

<script>
export default {
  name: "singlemessage",
  props: ["usermessages"],
  data() {
    return {
      users: [],
      time: ""
    };
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
    border-radius: 5px;
    padding: 0px 10px;
    font-size: 14px;
    font-weight: 100;
    width: 50%;
    float: right;
  }
}
</style>
