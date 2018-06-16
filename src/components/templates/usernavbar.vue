<template>

<b-navbar class="navigation" toggleable="md" type="light" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <router-link class="navbar-brand" to="/">LOGO</router-link>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Something</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          User
        </template>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

</template>

<script>
// import globalnavigation from '../components/templates/globalnavigation.vue';
export default {
  name: 'index',
  components:{
    // globalnavigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.navigation{
  max-width:1440px;
  margin:0 auto;
  background-color: transparent !important;
}
</style>
