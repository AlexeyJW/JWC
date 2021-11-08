import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import AllGroups from '../views/AllGroups.vue'
import Auth from '../views/Auth.vue'
import InputV from '../views/InputV.vue'
const routes=[
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
        path:'/Auth',
        name: 'Auth',
        component: Auth
    }
]
const router= createRouter({
    history: createWebHistory(),
    routes
})

export default router