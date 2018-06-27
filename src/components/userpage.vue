<template>
  <div class="chatbox ">
  <div>
    <div class="" :class="{'col-lg-3':toggledClass}">
    <chatnav ></chatnav>
      <div >
        <info :countUsers="countUsers" 
            :isOnline="totalUsersOnline"
            :unreadMessages="unreadMessages">
      </info>
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
<chat class="col" :clickedElement="clickedElement" :user="selectedUser"></chat>
  </div>
  </div>
</template>

<script>
import contacts from "../components/templates/contacts.vue";
import chatnav from "../components/templates/chatnav.vue";
import info from "../components/templates/info.vue";
import chat from "../components/templates/chatbox.vue";
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
      
      users:'',
      clickedElement: "",
      toggledClass: "",
      selectedUser: ""
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
    this.axios
      .get('https://api.myjson.com/bins/ixpfq')
      .then(response =>(this.users = response.data))
    this.getClickedElement();
    this.getToggleMenu();
  },
  methods: {
    getClickedElement() {
      this.$on("itemClicked", userID => {
        this.clickedElement = userID;
        for (var i = 0; i < this.users.length; i++) {
          // console.log(this.users[i].userID)
          if (this.clickedElement == this.users[i].userID) {
            this.selectedUser = this.users[i];
            setTimeout(() => {
              this.selectedUser.messages[0].display = true;
            }, 2500);
          }
        }
      });
    },
    getToggleMenu() {
      this.$on("toggleMenu", toggleClass => {
        this.toggledClass = toggleClass;
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
  padding: 0;
  .row {
    margin: 0;
    padding: 0;
    .col {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
