<template>
    <div >

    <ul>
        <li>
            <a class="chatbox d-flex align-items-center" href="#">
                <div class="img"> 
                    <img :src="user.img" alt="">
                </div> 
                <div>
                    <h5>{{user.name}}</h5>
                    <p>{{user.job}}</p>
                </div>
         
                <svg :class="{ onlineUser: user.online}" fill="red" height="15" width="15" >
                     <circle cx="7.5" cy="7.5" r="5" class="circle"/>
                </svg>
                
             </a>
        </li>
    </ul>


    </div>
</template>

<script>



export default {
  name: 'contacts',
    data () {
    return {
       classObject: {
         active: true,
        'text-danger': false
  }
    }
    
  },
   props: ['user'],
mounted(){



},
  methods:{
   
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/global.scss';

.chatbox{
  width:1440px;
  margin:0 auto;

  .img{
      height:100px;
      width:100px;
      overflow: hidden;
      border-radius: 50%;
    img{
        height:150px;
    }
  }
  p{
      margin:0;
  }
  h5{
      margin:0;
      padding:0;
  }
  .offlineUser{
      fill:red;
  }
  .onlineUser{
      fill:green;
  }
}


</style>
