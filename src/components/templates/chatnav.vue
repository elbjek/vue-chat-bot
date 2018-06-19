<template>
  <div class="chatbox">
<ul>
    <li><a href="#" :class="active=isActive">chat</a></li>
    <li><a href="#">notifications</a></li>
    <li><a href="#">favorites</a></li>
    <li><a href="#">calls</a></li>
</ul>
</div>
</template>

<script>



export default {
  name: 'chatnav',
    data () {
    return {
        isActive:true
    }
    
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
  input{
      border:$border-light;
      padding:20px;
  }
  p{
    border:$border-light;
    padding:20px;
    margin:10px;
}
}


</style>
