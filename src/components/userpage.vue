<template>
  <div class="chatbox">
<!-- ceo chat koji sadrzi sve ostale pod komponente -->
<!-- <navigacija></navigacija> -->
<chatnav></chatnav>

<div class="contact-list">
  <h2>Contact List</h2>
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

<info v-bind:countUsers="countUsers" 
      v-bind:isOnline="totalUsersOnline"
></info>


<chat v-bind:clickedElement="clickedElement" :user="users"
 >
      </chat>


  </div>
</template>

<script>

import contacts from '../components/templates/contacts.vue'
import chatnav from '../components/templates/chatnav.vue'
import info from '../components/templates/info.vue'
import chat from '../components/templates/displaychat.vue'
export default {
  name: 'index',
  components:{
    contacts,
    chatnav,
    info,
    chat
  },
  data(){
    return{
      users:[
        {name:'Tom', 
        messages:[{msg:"im amazing", read:false}],
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2jHa7ccA1ov9Sl4jejHQs9r2aBYmV9MTT_1KI39MXJpWepXR',
        job:"Marketing Manager",
        userID:1,
        online:true
        },
         {name:'Lena', 
        messages:[{msg:"Talentovana osoba", read:true}],
        img:'https://orig00.deviantart.net/41fb/f/2012/351/a/2/random_character_1_by_mnrart-d5odgq0.gif',
        job:"Talentovana osoba",
        userID:2,
        online:true},
        {name:'Kakica', 
        messages:[{msg:"Druga talentovana osoba", }],
        img:'https://ih0.redbubble.net/image.491833148.5471/ap,550x550,12x12,1,transparent,t.u3.png',
        job:"Talentovana osoba",
        userID:3,
        online:false}

      ],
        clickedElement:''
    }
  },
  computed:{

      countUsers(){
        return this.users.length
      },
      totalUsersOnline(){
        var total = 0;
        for(var i = 0; i < this.users.length; i++){ 
        // console.log("users online",this.users[i].online)
          if(this.users[i].online == true){
            total++
          }
        } return total
      }
  },


    mounted(){
    this.$on('itemClicked',(userID)=>{
      this.clickedElement = userID;
      console.log(this.clickedElement)
    })
   
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/global.scss';

.chatbox{
  width:1440px;
  margin:0 auto;
  background-color: $pink;

}


</style>
