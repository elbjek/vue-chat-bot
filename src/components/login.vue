<template>
<div>
  <globalnavigation></globalnavigation>
   <div class="container-fluid d-flex align-items-center justify-content-center"  >
      <div class="row form col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
         <form action="" class="  d-flex justify-content-center  align-items-center flex-column" @submit.prevent="validation">
            <h1>Login</h1>
            <div class="form-group d-flex align-items-center flex-column ">
               <label for="email">
               <input class=" form-control" type="text"  name="email" v-model="email" placeholder="Username/Email">
               </label>
               <p>{{emailError}}</p>
            </div>
            <div class="form-group  d-flex align-items-center flex-column">
               <label for="password"> 
               <input class="form-control" :type="passtype" name="password" @click="showIcon()" v-model="password" placeholder="Password"> 
               <a href="#" v-if="show" @click="togglePassword()"> </a>
               </label>
               <p>{{passError}} </p>
            </div>
            <button class="btn btn-primary" type="submit">Login</button>
         </form>
         <div class="noAcc">
            <p>Dont have an account yet?</p>
           <router-link to="/signup">SIGN UP</router-link> 
         </div>
      </div>
   </div>
</div>
</template>
<script>
import globalnavigation from '../components/templates/globalnavigation'
   export default {

     name: 'loginPage',
     components:{
       globalnavigation
     },
     data(){
   
       return{
         show:false,
         passtype:"password",
         password:"",
         email:"",
         emailError:"",
         passError:"",
         myvalidation:false
       }
     },
     methods:{
       showIcon(){
         this.show = true;
       },
       togglePassword(){
         this.show=true;
         if(this.passtype=="password"){
           this.passtype = "text"
         } else{
           this.passtype="password"
         }
       },
       regEx(){
         var regularExpresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regularExpresion.test(this.email);   
       },
       validation(){
      
         // console.log("im here",this.password, this.email);
         if(this.email == ""){
         this.emailError = "E-mail is required."
         }
         else if(!this.regEx(this.email) ){
         this.emailError = "Please enter a valid e-mail."
         }
          
        if(this.password == ""){
           this.passError = "Password is required."
         } else if (this.password.length < 3){
           this.passError = "Password needs to be at least 3 characters long."
         }
         else{
           this.password=""
           this.email=""
           this.$router.push('/user' ) 
         }
       
       }
          
     }
   
   }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../styles/global.scss';
// body{
// margin:0;
// padding:0;
// background:$gradient;
// }
.container-fluid{
background-image:$gradient;
padding:12% 5%;
.form{
    // margin:0 auto;
    background-color: rgba($color: $white, $alpha: 1);
    border-radius: 10px;

}
    h1{
        font-weight: 900;
        font-size: 30px;
        padding:100px 10px 30px 10px;
        color:$black;
    }
    form{
        input{
            border:none;
            width:100%;
            border-bottom: $border-gray;
            background-color: $white;
        }
    }
    button{
        margin:20px 0px 100px 0px;
        background-color:$dark-pink;
        border:none;
        font-weight: 700;
        padding:10px 20px;
        margin-bottom: 20px;
    }
    .noAcc{
        text-align: center;
        padding-bottom:40px;
          p{
              margin:40px 0px 10px 0px;
              font-size: 14px;
              opacity:0.6;
          }
          a{
              font-size: 14px;
            margin:0px;
              color:$black;
              transition:0.4s ease;
              &:hover{
                  font-weight: bold;
                  text-decoration: none;
              }
          }
    }
}
   
</style>