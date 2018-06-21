<template>
    <div class="conversation"  >
        <div  v-for="user in user" :key="user.userID" v-if="user.userID == clickedElement" class="header">
            <!-- {{user.name}} -->
      <div class="user-info">
            <h1>{{user.name}}</h1>
            <p>{{user.job}}</p>
             <svg :class="{ onlineUser: user.online}" fill="red" height="15" width="15" >
                     <circle cx="7.5" cy="7.5" r="5" class="circle"/>
            </svg>

          <a @click="addToConversation" href="/userpage"><i class="fas fa-plus"></i></a>

      </div>
      <div class="messages">
            <p v-for="contactMessage in user.messages" :key="contactMessage.msg" :class="{seen:contactMessage.read}">{{contactMessage.msg}} </p>
            <p v-for="message in newMessages" :key="message.message" > {{message.message}} {{message.time}} </p>
            <p v-if="user.online == false"> User is currently offline, you can still send your message.</p>
      </div>

      <form @submit.prevent="sendMessages" action="">
          <input type="text" placeholder="Start a conversation" v-model="newMessage">
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

export default {
  name: "displaychat",
  data() {
    return {
      newMessage: "",
      newMessages: [],
      show: false
    };
  },
  props: ["user", "clickedElement"],
  methods: {
    sendMessages() {
      var date = new Date();
      this.newMessages.push(
        { message: this.newMessage },
        { time: moment(date, "x").fromNow() }
      );
      this.newMessage = "";
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
  margin:0;
  padding:0;
  // width:500px;
  .seen {
    background-color: red;
  }
  .onlineUser {
    fill: green;
  }
  .toggleMic {
    visibility: hidden;
  }
}
</style>
