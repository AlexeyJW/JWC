import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import AllGroups from '../views/AllGroups.vue'
import Auth from '../views/Auth.vue'
import InputV from '../views/InputV.vue'
import Admin from '../views/Admin.vue'
import store from '../store/index'
import Novonikolaevka from "../views/Novonikolaevka.vue";

var role=''

const routes=[
    {
        path:'/Auth',
        name: 'Auth',
        component: Auth
    },

    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/AllGroups',
        name: 'AllGroups',
        component: AllGroups
    },
    {
        path:'/InputV',
        name: 'InputV',
        component: InputV
    },
    {
        path:'/Novonikolaevka',
        name: 'Novonikolaevka',
        component: Novonikolaevka
    },
    {
        path:'/Admin',
        name: 'Admin',
        component: Admin,
        beforeEnter: (to, from)=>{
                
          role=store.state.vUserRole
          if(role!='admin'){
            return false
            // to.name.push({})
          } 
          else return true  
        }
    }
]
const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router