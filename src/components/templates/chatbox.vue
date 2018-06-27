<template>
    <div class="conversation" v-if="clickedElement" >
        <div class="header">

      <div class="user-info">
            <h1>{{user.name}}</h1>
            <p>{{user.job}}</p>
                       <p v-if="user.online ==false"> User is currently offline, you can still send a message</p>
             <svg :class="{ onlineUser: user.online}" fill="red" height="15" width="15" >
                     <circle cx="7.5" cy="7.5" r="5" class="circle"/>
            </svg>
          <a href="/userpage"><i class="fas fa-plus"></i></a>
       
      </div>

        <singlemessage v-for="usermessages in user.messages " :key="usermessages.messages" :usermessages="usermessages"  ></singlemessage>




      <form @submit.prevent="sendMessages" action="">
          <input type="text" placeholder="Start a conversation" v-model="sentMessage">
            <i class="fas fa-wrench"></i>
            <i class="fas fa-images"></i>
            <i  class="fas fa-microphone"></i>
            <i class="fas fa-assistive-listening-systems"></i>
          <button type="submit"> send</button>
      </form>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import singlemessage from "./singlemessage";
export default {
  name: "displaychat",
  components: {
    singlemessage
  },
  data() {
    return {
      show: false,
      sentMessage: ""
    };
  },
  props: ["user","clickedElement"],
  methods: {
    sendMessages() {
      var date = new Date();
      this.user.messages.push({
        msg: this.sentMessage,
        time: moment(date).fromNow(),
        display: true
      });
      setTimeout(() => {
        this.pushNextMsg();
      }, 500);
      this.sentMessage = "";
    },
    pushNextMsg() {
      for (var i = 0; i < this.user.messages.length; i++) {
        if (this.user.messages[i].display == false) {
          this.user.messages.push({
            msg: this.user.messages[i].msg,
            read:true,
            display: true
          });
          return this.user.messages.splice(i, 1);
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/global.scss";

.conversation {
  // background-color: $white;
  border: 1px solid black;
  margin: 0;
  padding: 0;
  // width:500px;
  .onlineUser {
    fill: green;
  }
}
</style>
