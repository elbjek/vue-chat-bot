<template>
<div class="col">
      <div class="conversation " v-if="clickedElement" >
        <div class="header  d-flex flex-column justify-content-center">

      <div class="user-info col-12">
            <h1>{{user.name}}</h1>
            <p>{{user.job}}</p>
            <p v-if="user.online ==false"> User is currently offline, you can still send a message</p>
             <svg :class="{ onlineUser: user.online}" fill="red" height="10" width="10" >
                     <circle cx="4.5" cy="4.5" r="3.5" class="circle"/>
            </svg>
      </div>

        <singlemessage  v-if="user.online == true" :class="{isRead:usermessages.received}" 
        v-for="usermessages in user.messages " 
        :key="usermessages.messages" 
        :usermessages="usermessages">
        </singlemessage>


      <form class="d-flex justify-content-center" @submit.prevent="sendMessages" action="">
          <input type="text" name="chat" placeholder="Start a conversation" v-model="sentMessage">
          <button type="submit"> send</button>
      </form>

        </div>
    </div>
</div>
</template>

<script>
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
  props: ["user", "clickedElement"],
  methods: {
    sendMessages() {
      this.user.messages.push({
        msg: this.sentMessage,
        display: true,
        read: true,
        sent: true
      });

      setTimeout(() => {
        this.pushNextMsg();
      }, 1000);
      this.sentMessage = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/global.scss";
.col {
  margin: 0;
}
.conversation {
  margin: 0;
  padding: 0;
  height: 50%;
  .user-info {
    margin: 0 auto;
    text-align: center;
    color: $black;
    border-bottom: 1px solid $red;
    // height:120px;
    h1 {
      font-size: 20px;
      margin: 0;
      padding: 0;
      font-weight: 400;
    }
    p {
      font-size: 12px;
      opacity: 0.8;
      margin: 5px;
    }
    .onlineUser {
      fill: $green;
      height: 20px;
    }
  }

  .isRead {
    background-color: rgba($color: $dark-red, $alpha: 1);
    color: white;
    border-radius: 40px;
    padding: 0px 10px;
    font-size: 14px;
    font-weight: 100;
    width: 50%;
  }
  form {
    // border:1px solid black;
    text-align: center;
    margin-top: 60px;
    input {
      width: 50%;
      border-radius: 10px;
      border: none;
      background-color: rgba($color: $white, $alpha: 0.6);
      border: 1px solid rgba($color: $red, $alpha: 0.6);
      padding-left: 10px;
    }

    ::placeholder {
      color: $gray;
      font-weight: 100;
      font-style: italic;
    }
    button {
      background-color: $yellow;
      border-radius: 20px;
      padding: 3px 20px;
      font-size: 11px;
      &:hover {
        font-weight: bold;
        font-size: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
