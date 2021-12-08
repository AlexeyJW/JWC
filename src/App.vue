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
        <div class="router-view">
          <router-view/>
        </div>
     </div>
    
    </div>
</template>

<style>
*{
  text-decoration: none;
  /* font-size: calc(25px+(40+40*0.7)*(100vw-320px)/1170); */
  box-sizing:border-box;
   
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-family: 'Microsoft YaHei UI Light', sans-serif; */
  /* font-size:auto; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  flex-basis:100%;
}
@media screen and (max-width:2600px) {
   #app{
    
    width:1500px;
  }
 
  .v-input,
  .v-block-table-s88, 
  .v-chart, 
  .v-block-table,
  .block-table-general,
  .v-table, 
  .block-table,
  .v-nav-bar,
  .router-view{
    width:800px;
  }
  .v-table-s88 th{
    font-size:15px;
  }
  #v-table-s88-name-month{
    font-size:15px;
  } 
  /* .v-table-s88, .v-table{
    font-size:1rem;
  }
  
  #v-table-s88-name-month{
    font-size:2rem;
  } */
}

@media screen and (max-width:1199px) {
   #app{
    
    width:1140px;
  }
 
  .v-input,
  .v-block-table-s88, 
  .v-chart, 
  .v-block-table,
  .block-table-general,
  .v-table, 
  .block-table,
  .v-nav-bar,
  .router-view{
    width:800px;
  }
 
  /* .v-table-s88, .v-table{
    font-size:1rem;
  }
  
  #v-table-s88-name-month{
    font-size:2rem;
  } */
}
/*______________________________992______________________________________________*/
@media screen and (max-width:992px){
   #app{
     width:930px;
  }
  .v-input,
  .v-block-table-s88, 
  .v-chart, 
  .v-block-table,
  .block-table-general, 
  .block-table,
  .v-nav-bar,
  .router-view{
     width:600px;
    
  }
  .v-input-content{
  
   flex-basis:50%;
  }
  .v-table td{
    font-size:15px;
  }
  .v-table-s88 td{
    font-size:12px;
  }
  .v-table-s88 th{
    font-size:10px;
  }
  #v-table-s88-name-month{
    font-size:10px;
  } 
}
@media screen and (max-width:767px) {
   #app{
    width:710px;
  }
  .table-s88,
  .v-block-table-s88,
  .v-chart,
  .v-block-table,
  .block-table-general,
  .table-s3,
  .v-input,
  .v-nav-bar,
  .router-view{
     width:600px;
  }
 

  .v-input-content{
  
   flex-basis:50%;
  }
  .v-table td{
    font-size:15px;
  }
  .v-table-s88 td{
    font-size:12px;
  }
  .v-table-s88 th{
    font-size:10px;
  }
  #v-table-s88-name-month{
    font-size:10px;
  } 
}
@media screen and (max-width:576px) {
  #app{
     width:550px;
  }
   .v-input,
  .v-block-table-s88, 
  .v-chart, 
  .v-block-table,
  .block-table-general, 
  .block-table,
  .v-nav-bar,
  .router-view{
     width:550px;
    
  }
  .v-input-content{
  
   flex-basis:50%;
  }
  .v-table td{
    font-size:15px;
  }
  .v-table-s88 td{
    font-size:12px;
  }
  .v-table-s88 th{
    font-size:10px;
  }
  #v-table-s88-name-month{
    font-size:10px;
  } 
}


@media screen and (max-width:520px) {
  #app{
     width:500px;
  }
   .v-input,
  .v-block-table-s88, 
  .v-chart, 
  .v-block-table,
  .block-table-general, 
  .block-table,
  .v-nav-bar,
  .router-view{
     width:500px;
    
  }
  .v-input-content{
  
   flex-basis:50%;
  }
  .v-table td{
    font-size:15px;
  }
  .v-table-s88 td{
    font-size:12px;
  }
  .v-table-s88 th{
    font-size:10px;
  }
  #v-table-s88-name-month{
    font-size:10px;
  } 
}

@media screen and (max-width:420px) {
  #app{
    width:400px;
    margin:0px;
    padding:0px;
  }
  
  .v-input-content{
   
   flex-direction: column;
   flex-basis:25%;

  }
   .v-input,
  .v-block-table-s88, 
  .v-chart, 
  .v-block-table,
  .block-table-general, 
  .block-table,
  .v-nav-bar,
  .router-view{
   width:400px;
  }
  .v-table td{
    font-size:15px;
  }
  .v-table-s88 td{
    font-size:10px;
  }
  .v-table-s88 th{
    font-size:10px;
  }
  #v-table-s88-name-month{
    font-size:10px;
  } 
}






</style>
