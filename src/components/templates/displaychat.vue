<template>
    <div >
        <div v-for="user in user" :key="user.userID" v-if="user.userID == clickedElement" class="header">

            <!-- {{user.name}} -->
    <p>{{user.name}}</p>
        </div>
    
    </div>
</template>

<script>



export default {
  name: 'displaychat',
    data () {
    return {
  
    }
    
  },
   props: ['user', 'clickedElement'],
mount(){
    console.log(clickedElement)
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/global.scss';

.chatbox{
  width:1440px;
  margin:0 auto;

}


</style>
