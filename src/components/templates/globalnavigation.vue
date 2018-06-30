<template>
   <b-navbar class="navigation" toggleable="md" type="light" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">LOGO</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
         <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
         </b-navbar-nav>
         <b-navbar-nav class="ml-auto">
            <b-nav-item to="/login"> Login</b-nav-item>
            <b-nav-item to="/login"> Sign up</b-nav-item>
         </b-navbar-nav>
      </b-collapse>
   </b-navbar>
</template>
<script>
export default {
  name: "globalNav",
  components: {}
};
</script>

<style scoped lang="scss">
@import "../../styles/global.scss";

.navigation {
	max-width: 1440px;
	margin: 0 auto;
	background-color: transparent !important;
	.navbar-brand {
		font-weight: 900;
		color: $black !important;
		font-size: 26px;
	}
	.nav-link {
		color: $black !important;
		font-weight: bold;
		&:hover {
			text-decoration: underline !important;
		}
	}
}
</style>
