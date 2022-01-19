<script setup>
    import VNavBar from './components/v-nav-bar.vue'
    import Auth from './views/Auth.vue'
    import vSidebar from './components/v-sidebar.vue'
    import vPoster from './components/v-poster.vue'
    import {toggleSidebar, collapsed} from './store'
    import {computed} from 'vue'
    import {useStore} from 'vuex'
    
    const dd=new Date()
    const store=useStore()
    const isAuth=computed(()=>store.getters.GET_IS_AUTH)
    // onDeactivated(()=>{
    //  console.log("Goodbye!!")
    // })
    // Touch event
    let x1=null
    let y1=null
    const handleTouchStart=(event)=>{
      const firstTouch=event.touches[0]
      x1=firstTouch.clientX
      y1=firstTouch.clientY
      console.log("x1=",x1, "  y1=", y1)
    }
    const handleTouchMove=(event)=>{
      if(!x1 || !y1) return false
      let x2=event.touches[0].clientX
      let y2=event.touches[0].clientY

      let xDiff=x2-x1
      let yDiff=y2-y1
      if (Math.abs(xDiff)>Math.abs(yDiff)){
        // right - left
        if (xDiff>0)console.log('right')
        else console.log('left')

      }else
         //top - bottom
         if(yDiff>0){
           console.log('down')

         } 
         else console.log('top')
      x1=null
      y1=null
    }
    </script>

<template>
    <div id="app" @touchstart.prevent="handleTouchStart" @touchmove.prevent="handleTouchMove">
      <div v-if="isAuth">
         <Auth/>  
      </div> 
      <div v-else>
         
         <div class="display-nav-bar">
            <v-nav-bar/>
         </div>
      
         <div class="display-sidebar">
            <v-sidebar/>
            
         </div>
       
        <div class="router-view" @click="collapsed=true">
        
               <router-view/>
        </div>
      </div>
    
    </div>
</template>

<style>
*{
  text-decoration: none;
  
  box-sizing:border-box;
   
}
body{
  margin:0;
  padding:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis:100%;
}
@media screen and (max-width:2600px) {
   #app{
    
    width:1500px;
  }
  .display-sidebar, .display-poster{
    display: none;
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
 
}

@media screen and (max-width:1199px) {
   #app{
    
    width:1140px;
  }
  .display-sidebar, .display-poster{
    display: none;
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
 
 
}
/*______________________________992______________________________________________*/
@media screen and (max-width:992px){
   #app{
     width:930px;
     margin-top:0px;
  }
  .display-nav-bar {
    display:none;
  }
  
  .display-sidebar, .display-poster{
    
    display:block;
  }
  .v-input,
  .v-block-table-s88, 
  .v-chart, 
  .v-block-table,
  .block-table-general, 
  .block-table,
  .v-nav-bar,
  .router-view,
  .display-poster{
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
    width:620px;
  }
  .display-nav-bar{
    display:none;
  }
  .display-sidebar, .display-poster{
    display:block;
  }
  .table-s88,
  .v-block-table-s88,
  .v-chart,
  .v-block-table,
  .block-table-general,
  .table-s3,
  .v-input,
  .v-nav-bar,
  .router-view,
  .display-poster{
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
     width:570px;
  }
  .display-nav-bar{
    display:none;
  }
  .display-sidebar, .display-poster{
    display:block;
  }
   .v-input,
  .v-block-table-s88, 
  .v-chart, 
  .v-block-table,
  .block-table-general, 
  .block-table,
  .v-nav-bar,
  .router-view,
  .display-poster,
  .v-admin-users{
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
     width:420px;
  }
  .display-nav-bar{
    display:none;
  }
  .display-sidebar, .display-poster{
    display:block;
  }
   .v-input,
  .v-block-table-s88, 
  .v-chart, 
  .v-block-table,
  .block-table-general, 
  .block-table,
  .v-nav-bar,
  .router-view,
  .display-poster,
  .v-admin-users{
     width:400px;
    
  }
  .v-input-content{
  
   flex-basis:50%;
  }
  .v-table td{
    font-size:15px;
  }
  .v-table-s88 td{
    font-size:10px;
  }
  .v-table-s88 th, .v-admin-users{
    font-size:10px;
  }
  #v-table-s88-name-month{
    font-size:8px;
  } 
}

@media screen and (max-width:420px) {
  #app{
    width:370px;
    margin:0px;
    padding:0px;
  }
  .display-nav-bar{
    display:none;
  }
  .display-sidebar, .display-poster{
    display:block;
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
  .router-view,
  .display-poster,
  .v-admin-users,
  .v-table{
   width:350px;
  }
  .v-table td{
    font-size:12px;
  }
  .v-table th{
    font-size:10px;
  }
  .v-table-s88 td, .v-admin-users{
    font-size:8px;
  }
  .v-table-s88 th{
    font-size:8px;
  }
  #v-table-s88-name-month{
    font-size:8px;
  } 
}






</style>
