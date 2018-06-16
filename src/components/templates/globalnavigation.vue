<template>
  <nav class="navbar navbar-expand-lg navbar-light navigation">
  <router-link to="/" class="navbar-brand">LOGO</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
  
      </ul>
      
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>


export default {
  name: 'globalNav',
  components: {

  }
}
</script>

<style lang="scss">
@import '../../styles/global.scss';

.navigation{
  
    max-width:1440px;
  margin:0 auto;
   .navbar-brand{

     font-weight: 900;
     color:$black !important;
     font-size: 26px;

   }
    .nav-link{
    color:$black !important;
    font-weight: bold;
      &:hover{
        text-decoration: underline !important;
      }
  }
}

</style>
