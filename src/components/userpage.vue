<template>
   <div class="chatbox container-fluid ">
      <div class="row d-flex flex-row align-items-start">
         <div class="col-lg-3 sidebar" >
            <chatnav></chatnav>
            <info
               :users="users" 
               :allUsers="allUsers"
               :unreadMessages="unreadMessages" 
               :totalUsersOnline="totalUsersOnline">
            </info>
            <contacts 
               v-for="user in users"
               :user="user"
               :key="user.userID"> 
            </contacts>
         </div>
         <chat :clickedElement="clickedElement" :user="selectedUser"></chat>
      </div>
   </div>
</template>

<script>
	import moment from "moment";
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
			users: "",
			clickedElement: "",
			toggledClass: "",
			selectedUser: "",
			time: ""
		};
	},
	mounted() {
		this.axios.get("https://api.myjson.com/bins/jz346").then(response => {
			localStorage.setItem("users", JSON.stringify(response.data));
		});
		this.users = JSON.parse(localStorage.getItem("users"));
		this.getClickedElement();
	},
	computed: {
		allUsers() {
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
	methods: {
		getClickedElement() {
			var time = new Date();
			localStorage.setItem(
				"time",
				JSON.stringify({
					time: moment(time).format(" h:mm:ss a"),
					show: false
				})
			);
			this.$on("itemClicked", userID => {
				this.clickedElement = userID;
				for (var i = 0; i < this.users.length; i++) {
					if (this.clickedElement == this.users[i].userID) {
						this.selectedUser = this.users[i];
						setTimeout(() => {
							this.selectedUser.messages[0].display = true;
							this.selectedUser.messages[0].received = true;
						}, 500);
					}
				}
			});
		}
	}
}; 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/global.scss";

.chatbox {
	margin: 0 auto;
	padding: 0px;
	max-width: 1440px;
	border-radius: 5px;
	overflow: hidden;
	.row {
		margin: 0;
		padding: 0;
		.col {
			margin: 0;
			padding: 0;
		}
	}
	.col-lg-3 {
		margin: 0;
		padding: 0;
	}
	.sidebar {
		border-right: 1px solid $dark-red;
		background-color: $light-red;
	}
	.isUnread {
		background-color: red;
	}
}
</style>
