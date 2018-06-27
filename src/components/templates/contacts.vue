<template>
    <div class="contacts" >
      <ul>
          <li @click.prevent="getClickedElement">
              <router-link to="/userpage" class=" d-flex align-items-center" href="#">
                    <div class="img-circle">
                        <img class="img-responsive" :src="user.img" alt="">
                    </div>
                  <div>
                      <h5>{{user.name}}</h5>
                      <p>{{user.job}}</p>
                  </div>
                  <svg :class="{ onlineUser: user.online}" fill="red" height="15" width="15" >
                      <circle cx="7.5" cy="7.5" r="5" class="circle"/>
                  </svg>
              </router-link>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "contacts",
  data() {
    return {
      getClickedElementID: ""
    };
  },
  props: ["user"],

  methods: {
    getClickedElement() {
      this.getClickedElementID = this.user.userID;
      this.$parent.$emit("itemClicked", this.getClickedElementID);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../styles/global.scss";

.contacts {
  border: 1px solid $black;

 ul{
   margin:0;
   padding:0;
   li{
     list-style-type: none;
     a{
        .img-circle{
          max-width: 100px;
          max-height: 100px;
          // position: relative;
          overflow: hidden;
          border-radius: 50%;
           img{
           max-height:120px;
          //  border-radius: 100%;
           border:1px;
       }
        }
     }
   }
 }

  .offlineUser {
    fill: red;
  }
  .onlineUser {
    fill: green;
  }
}
</style>
