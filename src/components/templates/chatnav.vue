<template>
  <div class="chatnav d-flex align-items-center justify-content-between"  >
    <ul>
        <li><a href="#" >LOGO</a></li>
        <li><a href="#" ><i class="far fa-comment"></i></a></li>
        <li><a href="#"><i class="far fa-bell"></i></a></li>
        <li><a href="#"><i class="far fa-star"></i></a></li>
        <li><a href="#"><i class="fas fa-phone"></i></a></li>

    </ul>
    <a href="#" @click.prevent="toggleMenu"><i class="fas fa-angle-left"></i></a>
</div>
</template>

<script>
export default {
  name: "chatnav",
  data() {
    return {
      toggle: false,
      toggleClass : ''
    };
  },
  methods: {
    toggleMenu(){
      // 
      this.toggle? this.toggle=false:this.toggle=true
      this.toggleClass = this.toggle;
      this.$parent.$emit("toggleMenu", this.toggleClass)
      console.log("apsfd")
    
      }
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/global.scss";

.chatnav {
  margin: 0 auto;
  padding: 0;
  border: 1px solid $black;
  a{
    margin-right:10px;
    padding:0;
  }
  ul {
    margin: 0;
    padding: 10px 0px;
    li {
      display: inline;
      list-style-type: none;
      a {
        color: $red;
        margin: 10px;
        font-size: 20px;
        text-align: center;
        
      }
    }
  }
}
  .toggleMenu{
    background-color: red;
  }
</style>
