import VueRouter from 'vue-router';
import login from './components/login.vue'
import userpage from './components/userpage.vue'
export default new VueRouter({
    routes: [
        {path:'/', component:login},
        {path:'/userpage', component:userpage}
    ]
});