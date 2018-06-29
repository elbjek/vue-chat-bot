<template>
    <div class="contacts" >
   
      <ul>
          <li @click.prevent="getClickedElement"  >
              <router-link to="/userpage" href="#"   class="d-flex align-items-center justify-content-between">
                   <div class="d-flex align-items-center">
                      <div class="img-circle">
                        <img  :src="user.img" alt="">
                    </div>
                  <div>
                      <h5>{{user.name}}</h5>
                      <p>{{user.job}}</p>
                  </div>
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
      getClickedElementID: "",

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
padding-right: 10px;

 ul{
   margin:0;
   padding:0;
   li{
     list-style-type: none;
     a{
        .img-circle{
          max-width: 70px;
          max-height: 70px;
          overflow: hidden;
          border-radius: 50%;
          margin-right: 10px;
           img{
           max-height:80px;
          //  border-radius: 100%;
           border-radius:1px;
          }
        }
        h5{
          font-size: 18px;
          margin:0;
          padding:0;
          font-weight: 900;
         
        }
        p{
          margin:0;
          padding:0;
        }
        font-size: 14px;
         color:$black;
     }
   }
 }
  
  .offlineUser {
    fill: $red;
  }
  .onlineUser {
    fill: $green;
  }
  .isFavorite{
    background-color:pink;
  }
  .isUnread{
    background-color:red;
  }
}
</style>
