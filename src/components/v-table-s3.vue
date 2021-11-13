<template>
    <div class="block-table">
        <div>
            <h3><strong>General Meeting Report (S-3) {{props.title}}</strong></h3>
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
                    <td>{{wd.find((el)=>el.weekNumber==1)?.total}}</td>
                    <td>{{we.find((el)=>el.weekNumber==1)?.total}}</td>
                </tr>
                <tr>
                    <td>2</td>
                   <td>{{wd.find((el)=>el.weekNumber==2)?.total}}</td>
                   <td>{{we.find((el)=>el.weekNumber==2)?.total}}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{{wd.find((el)=>el.weekNumber==3)?.total}}</td>
                    <td>{{we.find((el)=>el.weekNumber==3)?.total}}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>{{wd.find((el)=>el.weekNumber==4)?.total}}</td>
                    <td>{{we.find((el)=>el.weekNumber==4)?.total}}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>{{wd.find((el)=>el.weekNumber==5)?.total}}</td>
                    <td>{{we.find((el)=>el.weekNumber==5)?.total}}</td>
                </tr>
                <tr>
                    <td><strong>Total:</strong></td>
                    <td><strong>{{wd.reduce((sum, el)=>sum+el.total, 0)}}</strong></td>
                    <td><strong>{{we.reduce((sum, el)=>sum+el.total, 0)}}</strong></td>
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
   const props=defineProps({
       title:{type:String},
       group:{type:String,
              default:'6'
              }
      
   })
  
//    const groups=computed(()=>store.getters.TOTAL_GROUPS)
   
   //date now
   const dateNow=new Date()
   const monthNow=dateNow.getMonth()
   const yearNow=dateNow.getFullYear()
  
   const store=useStore()
   
   const tableData =computed(()=>store.getters.FILTER_GROUP(props.group, ''+yearNow, ''+monthNow))
   const wd=computed(()=>tableData.value.filter(el=>el.weekday=='weekdays'))
   const we=computed(()=>tableData.value.filter(el=>el.weekday=='weekend'))

//    const wd1=0
//    const wd2=0
//    const wd3=0
//    const wd4=0 
//    const wd5=0 
//    const we1=0
//    const we2=0 
//    const we3=0
//    const we4=0 
//    const we5=0 

        
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