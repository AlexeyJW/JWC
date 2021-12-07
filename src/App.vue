<script setup>
    import VNavBar from './components/v-nav-bar.vue'
    import Auth from './views/Auth.vue'
    import {computed} from 'vue'
    import {useStore} from 'vuex'

    const store=useStore()
    const isAuth=computed(()=>store.getters.GET_IS_AUTH)
    // onDeactivated(()=>{
    //  console.log("Goodbye!!")
    // })
</script>

<template>
    <div id="app">
     <div v-if="isAuth">
       <Auth/>  
     </div> 
     <div v-else>
        <v-nav-bar/>
        <div>
          <router-view/>
        </div>
     </div>
    
    </div>
</template>

<style>
*{
  text-decoration: none;
  /* font-size: calc(25px+(40+40*0.7)*(100vw-320px)/1170); */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-family: 'Microsoft YaHei UI Light', sans-serif; */
  font-size:auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
</style>
