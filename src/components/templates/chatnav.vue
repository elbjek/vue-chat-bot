<template>
   <div class="chatnav d-flex align-items-center justify-content-between">
      <a href="#" class="logo">LOGO</a>
      <ul>
         <li><a href="#" ><i  class="far fa-comment active"></i></a></li>
         <li><a href="#"><i class="far fa-bell"></i></a></li>
         <li><a href="#"><i class="far fa-star"></i></a></li>
         <li><a href="#"><i class="fas fa-phone"></i></a></li>
      </ul>
   </div>
</template>

<script>
export default {
  name: "chatnav"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/global.scss";

.chatnav {
	margin: 0 auto;
	padding: 20px 0px;
	border-bottom: 1px solid $dark-red;
	background-color: $dark-red;
	a {
		margin-right: 10px;
		padding: 0;
	}
	.logo {
		color: $white;
		font-weight: 600;
		text-decoration: none;
		font-size: 30px;
		&:hover {
			font-weight: 900;
		}
	}
	ul {
		margin: 0;
		padding: 13px 0px;
		li {
			display: inline;
			list-style-type: none;
			a {
				color: $white;
				margin: 12px;
				font-size: 16px;
				text-align: center;
				text-decoration: none;
			}
		}
	}
}

.toggleMenu {
	background-color: red;
}
</style>
