<script setup>
     

</script>

<template>
    <div class="nav">
          <router-link to='/'>Home</router-link>|
          <router-link to='/AllGroups'>All Groups</router-link>|
          <router-link to='/Auth'>Auth</router-link>
    </div>
    <div>
          <router-view/>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size:auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
