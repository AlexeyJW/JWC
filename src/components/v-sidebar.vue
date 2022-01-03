<template>
   <div class="sidebar" :style="{width:sidebarWidth}">
      <h2>
          <span v-if="collapsed">
              <br/>
              <!-- <div>J</div>
              <div>W</div>
              <div>C</div> -->
          </span>
          <span v-else>JWC</span>
      </h2>
      <v-sidebar-links to='/' icon="fas fa-chart-bar">Главная</v-sidebar-links> 
      <v-sidebar-links to='/InputV' icon="fas fa-file-signature">Ввод отчёта</v-sidebar-links> 
      <v-sidebar-links to='/AllGroups' icon="fas fa-users">Все группы</v-sidebar-links> 
      <v-sidebar-links to='/Novonikolaevka' icon="fas fa-car">Новониколаевка</v-sidebar-links> 
      <div v-if="role=='admin'">
          <v-sidebar-links to='/Admin' icon="fas fa-download">Admin</v-sidebar-links> 
      </div>
      
      <br/> 
       <div v-if="!collapsed" class="v-sidebar-user" >
             <img class="v-photo" :src="store.state.vUserPhoto"/>
             <div class="v-sidebar-user-text">
                 <h4 class="user-name">{{store.state.vUser}}</h4>
                 <h4 class="user-name">{{store.state.vUserEmail}}</h4>
                 <h4 class="user-name">Группа: {{store.state.vUserGroup}}</h4>
             </div>
             
             
            
        </div>
       <br/>
       <br/>
       <div class="v-logout" @click="logOut">
          <i class="fas fa-door-open" ></i>
       </div>
            
       
       <span
          class="collapse-icon"
          :class="{'rotate-180':collapsed}"
          @click="toggleSidebar">
             <i class="fas fa-bars" />  
        </span>
   </div>
</template>

<script setup>
import vSidebarLinks from './v-sidebar-links.vue'
import {collapsed, toggleSidebar, sidebarWidth} from '../store'
import {resOut} from '../modules/initFB.js'
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
    const props=defineProps({

    })
const store=useStore()
const router=useRouter()
const role=computed(()=>store.state.vUserRole)
 const logOut=()=>{
    //    store.commit('SET_IS_AUTH')
       
    //    store.commit('DESTROY_STATE')
       store.dispatch('UNSUBSCRIBE')
    //    const r=resOut()
    //    console.log(r)
        router.push({name:'Home'})
       
   }
// console.log("toggleSidebar=", collapsed.value)
</script>

<style>
:root{
    --sidebar-bg-color:#539b9b;
    --sidebar-item-color:white;
    --sidebar-item-hover:#ce6f16;
    --sidebar-item-active:#73e2d0;
    /* --sidebar-icon-color:#0079AF; */
    --sidebar-icon-color: rgb(71, 74, 75);
}
</style>
<style scoped>
   .sidebar{
       /* margin-top:10px; */
       /* margin-right:10px; */
       color:var(--sidebar-item-color);
       background-color: var(--sidebar-bg-color);
       /* float: left; */
       position: fixed;
       opacity:0.9;
       z-index:1;
       top:0;
       bottom:0;
       /* padding: 0.5em; */

       transition: 0.3ms ease;

       display: flex;
       flex-direction:column;


       

   }
   .fas{
       color:var(--sidebar-icon-color)
   }
   .v-sidebar-user{
        border-top:1px solid lightgrey;
        border-bottom:1px solid lightgrey;
        display:flex;
        flex-direction:row;
        font-size:9px;
        padding:5px;
        color:white;
        /* font-family: 'Microsoft YaHei UI Light', sans-serif; */
        justify-content:center;
        align-items:center;
        height:100px;
   }
   .v-photo{
        align-self:center;
        width: 5em;
        height: 5em;
        border: 1px solid lightgrey;
        border-radius: 50%;
        margin-bottom:5px;  
   }
   .v-sidebar-user-text{
        display:flex;
        flex-direction:column;
        align-items:flex-start;

   }
  
   .v-logout{
        margin: 0.1em 0;
        padding: 0.4em;
        font-size:21px;
        /* border:1px solid lightgrey; */
        color:var(--sidebar-icon-color);
        align-self:flex-start;

   }
   .collapse-icon{
       position: absolute;
       /* bottom:0; */
       top:0;
       padding:0.75em;
       color: var(--sidebar-icon-color);
       transition: 0.2s linear;
     
   }
   .rotate-180{
       transform: rotate(180deg);
       transition: 0.2s linear;
   }
</style>