<template>
    <div >
        <ul>
            <li > <a href="#">Contacts:{{countUsers}}</a></li>
            <li  ><a href="#">Online:{{isOnline}}</a></li>
            <li><a href="#">Unread Messages</a></li>            
        </ul>


        <form action="">
            <input type="text" placeholder="Search contacts">
       <i class="fas fa-search"></i>
        </form>

    </div>

</template>

<script>



export default {
  name: 'info',
    data () {
    return {

    }
    
  },
   props: ['countUsers','isOnline'],

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
