<template>
    <div class="block-table">
        <div class="v-button-block">
            <h3><strong>General Meeting Report (S-3) {{props.title}}</strong></h3>
            <v-button class="v-button-item" textButton="Send"/>
           
        </div>
       
        
        <div>
        <table class="v-table">
            <thead class="v-thead">
                <tr>
                    <th>Week</th>
                    <th>Weekdays</th>
                    <th>Weekend</th>
                    
                </tr>
               
            </thead>
            <tbody class="v-tbody">
                <tr>
                    <td>1</td>
                    <td>{{arrWD.filter(el=>el.weekNumber==1).reduce((sum,{total})=>sum+total, 0)}}</td>
                    <td>{{arrWE.filter(el=>el.weekNumber==1).reduce((sum,el)=>sum+el.total, 0)}}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{{arrWD.filter(el=>el.weekNumber==2).reduce((sum,{total})=>sum+total, 0)}}</td>
                    <td>{{arrWE.filter(el=>el.weekNumber==2).reduce((sum,el)=>sum+el.total, 0)}}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{{arrWD.filter(el=>el.weekNumber==3).reduce((sum,{total})=>sum+total, 0)}}</td>
                    <td>{{arrWE.filter(el=>el.weekNumber==3).reduce((sum,el)=>sum+el.total, 0)}}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>{{arrWD.filter(el=>el.weekNumber==4).reduce((sum,{total})=>sum+total, 0)}}</td>
                    <td>{{arrWE.filter(el=>el.weekNumber==4).reduce((sum,el)=>sum+el.total, 0)}}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>{{arrWD.filter(el=>el.weekNumber==5).reduce((sum,{total})=>sum+total, 0)}}</td>
                    <td>{{arrWE.filter(el=>el.weekNumber==5).reduce((sum,el)=>sum+el.total, 0)}}</td>
                </tr>
                <tr>
                    <td><strong>Total:</strong></td>
                    <td><strong>{{arrWD.reduce((sum,{total})=>sum+total, 0)}}</strong></td>
                    <td><strong>{{arrWE.reduce((sum,{total})=>sum+total, 0)}}</strong></td>
                </tr>
                <tr>
                    <td><strong>Average:</strong></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script setup>
   import {defineProps, computed, ref} from 'vue'
   import {useStore} from 'vuex'
   import vButton from './v-button.vue'
   const props=defineProps({
       title:{type:String},
      
      
   })
  
//    const groups=computed(()=>store.getters.TOTAL_GROUPS)
   
   //date now
   const dateNow=new Date()
   const monthNow=dateNow.getMonth()
   const yearNow=dateNow.getFullYear()
 
   const store=useStore()
   const sum=computed(()=>store.getters.FILTER_ALL_GROUPS(''+yearNow, ''+monthNow))
   const arrWD=computed(()=>store.getters.GET_S3(''+yearNow, ''+monthNow).filter(el=>el.weekday=='weekdays'))
   const arrWE=computed(()=>store.getters.GET_S3(''+yearNow, ''+monthNow).filter(el=>el.weekday=='weekend'))
   
</script>

<style>
   .block-table{
       display: flex;
       flex-direction: column;
       justify-content: center;
        border: 1px solid lightgray;
        margin: 10px;
        box-shadow: 0 0 8px 0 darkgray;
        padding: 10px;
        /* flex-basis:500px; */
        width:600px;
   }
   .v-button-block{
       display:flex;
       flex-direction:row;
       align-items: center;
       justify-content: center;
  
      
       
   }
   .v-button-item{
       margin-left: 20px;
   }
   .v-table{
       border-collapse: collapse;
       border-spacing: 0;
       width:100%;
       overflow: hidden;
        font-size: 12px;
       

   }
   .v-table th, .v-table td{
       border:1px solid #888;
       padding:10px;
       text-align: center;
       vertical-align: middle;
       position:relative;

   }
   
   .v-table td:hover{
       background: #fffabe;

   }
   .v-table td:hover:before{
       background-color:#eee;
       content:'';
       height: 100%;
       left:-5000px;
       position:absolute;
       top:0;
       width: 10000px;
       z-index: -2;
   }
   .v-table td:hover:after{
       background-color:#eee;
       content:'';
       height: 10000px;
       left:0;
       position:absolute;
       top:-5000px;
       width: 100%;
       z-index: -1;
   }
</style>