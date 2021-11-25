<script setup>
    import VNavBar from './components/v-nav-bar.vue'
    import {onMounted} from 'vue'
    import {useStore} from 'vuex'

    const store=useStore()

    onMounted(()=>{
      store.dispatch('GET_S3')
      store.dispatch('GET_S88')
    })
</script>

<template>
    <div id="app">
    <v-nav-bar/>
    
    <div>
          <router-view/>
         
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
