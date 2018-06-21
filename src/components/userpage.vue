<template>
  <div class="chatbox ">
<!-- ceo chat koji sadrzi sve ostale pod komponente -->
<!-- <navigacija></navigacija> -->
<div class="row" >
  <div class="col" :class="{'col-3':toggledClass}">
  <chatnav class=""></chatnav>
    <div >
      <info v-bind:countUsers="countUsers" 
          v-bind:isOnline="totalUsersOnline"
          v-bind:unreadMessages="unreadMessages"
    ></info>
    </div>
    <div >
      <select name="items" id="">
      <option selected value="favorites">Favorites</option>
      <option value="favorites">All Contacts</option>
      <option value="favorites">New Contacts</option>
    </select>

      <contacts    
          v-for="user in users"
          v-bind:user="user"
          v-bind:key="user.userID"
          v-bind:countUsers="countUsers"> 
      </contacts>
    </div>
</div>
<chat class="col" v-bind:clickedElement="clickedElement" :user="users"></chat>
  </div>
  </div>
</template>

<script>
import contacts from "../components/templates/contacts.vue";
import chatnav from "../components/templates/chatnav.vue";
import info from "../components/templates/info.vue";
import chat from "../components/templates/displaychat.vue";
export default {
  name: "index",
  components: {
    contacts,
    chatnav,
    info,
    chat
  },
  data() {
    return {
      users: [
        {
          name: "Benedict Cucumber",
          messages: [
            { msg: "Hey Bro!", read: true },
            { msg: "Hey dude", read: true },
            { msg: "Check this out bro!", read: true }
          ],
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2jHa7ccA1ov9Sl4jejHQs9r2aBYmV9MTT_1KI39MXJpWepXR",
          job: "Marketing Manager",
          userID: 1,
          online: true
        },
        {
          name: "Lena",
          messages: [
            { msg: "Talentovana osoba", read: true },
            { msg: "Hey dude", read: false },
            { msg: "Check this out bro!", read: false }
          ],
          img:
            "https://orig00.deviantart.net/41fb/f/2012/351/a/2/random_character_1_by_mnrart-d5odgq0.gif",
          job: "Talentovana osoba",
          userID: 2,
          online: true
        },
        {
          name: "Ethan Klein",
          messages: [
            { msg: "Papa Bless", read: true },
            { msg: "Hey dude", read: true },
            { msg: "Check this out bro!", read: false }
          ],
          img:
            "https://ih0.redbubble.net/image.491833148.5471/ap,550x550,12x12,1,transparent,t.u3.png",
          job: "h3h3 Production",
          userID: 3,
          online: false
        },
        {
          name: "Kakica",
          messages: [
            { msg: "Druga talentovana osoba", read: true },
            { msg: "Hey dude", read: true },
            { msg: "Check this out bro!", read: false }
          ],
          img:
            "https://ih0.redbubble.net/image.491833148.5471/ap,550x550,12x12,1,transparent,t.u3.png",
          job: "Talentovana osoba",
          userID: 4,
          online: true
        }
      ],
      clickedElement: "",
      toggledClass:''
    };
  },
  computed: {
    countUsers() {
      return this.users.length;
    },
    totalUsersOnline() {
      var total = 0;
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].online === true) {
          total++;
        }
      }
      return total;
    },
    unreadMessages() {
      var total = 0;
      for (var i = 0; i < this.users.length; i++) {
        for (var j = 0; j < this.users[i].messages.length; j++) {
          if (this.users[i].messages[j].read == false) {
            total++;
          }
        }
      }
      return total;
    }
  },

  mounted() {
    this.getClickedElement();
    this.getToggleMenu();
  },
  methods: {
    getClickedElement() {
      this.$on("itemClicked", userID => {
        this.clickedElement = userID;
      });
    },
    getToggleMenu(){
      this.$on("toggleMenu", toggleClass => {
      this.toggledClass = toggleClass;
      console.log("jebote")
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/global.scss";

.chatbox {
  // max-width: 1440px;
  margin: 0;
  padding:0;
  .row{
    margin:0;
    padding:0;
    .col{
      margin:0;
      padding:0;
    }
  }
}
</style>
