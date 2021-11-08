<script setup>
    import VNavBar from './components/v-nav-bar.vue'
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
  font-size:auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
</style>
