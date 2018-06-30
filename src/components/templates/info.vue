<template>
   <div class="contact-counts" >
      <ul class="d-flex justify-content-center">
         <li class="d-flex flex-column"><a href="#"> {{allUsers}}</a> Contacts </li>
         <li class="d-flex flex-column"><a href="#"> {{totalUsersOnline}}</a>Online</li>
         <li class="d-flex flex-column"><a href="#">{{unreadMessages}} </a> Unread</li>
      </ul>
      <form action="" class="d-flex justify-content-between align-items-center">
         <h6>CONTACT LIST:</h6>
         <label for="select">
            <select name="select" id="select">
               <option  selected value="favorites">Favorites</option>
               <option  value="favorites">All Contacts</option>
               <option value="favorites">New Contacts</option>
            </select>
         </label>
      </form>
   </div>
</template>
<script>
export default {
	name: "info",
	data() {
		return {
			newContact: ""
		};
	},
	props: ["users", "unreadMessages", "totalUsersOnline", "allUsers"],
	methods: {
		toggleFavorites() {
			alert("halp");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/global.scss";

.contact-counts {
	ul {
		text-align: center;
		margin-bottom: 20px;
		border-bottom: 1px solid $red;
		padding: 0;
		li {
			display: inline;
			font-size: 14px;
			margin: 10px;
			a {
				text-decoration: none;
				font-size: 20px;
				margin: 0;
				color: $red;
				font-weight: 900;
			}
		}
	}
	form {
		h6 {
			font-weight: bolder;
			color: $black;
		}
		text-align: right;
		padding-right: 10px;
		font-weight: 900;
		margin-bottom: 20px;
		select {
			background-color: transparent;
			color: $black;
			cursor: pointer;
			border: none;
			font-size: 14px;
		}
	}
}
</style>
