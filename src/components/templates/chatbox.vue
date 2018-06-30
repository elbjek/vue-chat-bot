<template>
   <div class="col">
      <div class="conversation " v-if="clickedElement" >
         <div class="header  d-flex flex-column justify-content-center">
            <div class="user-info col-12">
               <h1>{{user.name}}</h1>
               <p>{{user.job}}</p>
               <p v-if="user.online ==false"> User is currently offline</p>
               <svg :class="{ onlineUser: user.online}" fill="red" height="10" width="10" >
                  <circle cx="4.5" cy="4.5" r="3.5" class="circle"/>
               </svg>
            </div>
            <singlemessage
               v-if="user.online == true" 
               :class="{isRead:usermessages.received}" 
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
			sentMessage: "",
			time: "",
			currentTime: ""
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
		},
		pushNextMsg() {
			for (var i = 0; i < this.user.messages.length; i++) {
				if (this.user.messages[i].display == false) {
					localStorage.setItem(
						"msg",
						this.user.messages.push({
							msg: this.user.messages[i].msg,
							read: true,
							display: true,
							received: true
						})
					);
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
.col {
	margin: 0;
}

.conversation {
	margin-bottom: 10px;
  padding:0;
	height: 515px;
	position: relative;
	background-color: $light-red;
	.user-info {
		margin: 0 auto;
		text-align: center;
		color: $black;
		border-bottom: 1px solid $red;
		padding: 12px 0px;
		h1 {
			font-size: 20px;
			margin: 0;
			padding: 0;
			font-weight: 400;
		}
		p {
			font-size: 12px;
			opacity: 0.8;
			margin: 0px;
		}
		.onlineUser {
			fill: $green;
		}
	}
	.isRead {
		background-color: rgba($color: $dark-red, $alpha: 1);
		color: white;
		border-radius: 5px;
		padding: 0px 10px;
		font-size: 14px;
		font-weight: 100;
		width: 50%;
		margin: 30px 0px;
	}
	form {
		text-align: center;
		position: absolute;
		width: 100%;
    bottom: 0;
          // margin-bottom:10px;
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
