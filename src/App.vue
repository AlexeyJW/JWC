<script setup>
    import VNavBar from './components/v-nav-bar.vue'
    import Auth from './views/Auth.vue'
    import {onMounted, computed} from 'vue'
    import {useStore} from 'vuex'

    const store=useStore()
    const isAuth=computed(()=>store.getters.GET_IS_AUTH)
    onMounted(()=>{
      store.dispatch('GET_S3')
      store.dispatch('GET_S88')
    })
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
