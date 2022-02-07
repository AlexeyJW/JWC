<template>
    <div class="block-table">
        <div class="v-block-title">
            <h3><strong>Отчёт о посещаемости (S-3) {{props.title}}</strong></h3>
            <div class="v-button-remove" v-if="props.removeIcon" @click="vRemoveTable">
                <div class="v-button-icon-remove">
                    <i class="fas fa-wrench"/>
                </div>
                 
            </div>
        </div>
          
            <div class="v-button-block">
                    <button class="v-button-month-back" 
                            v-if="isButtonBack"
                            @click="monthBack">
                                <i class="fas fa-angle-left"/>
                            </button>
                            {{convertMonth(monthNow)}} {{yearNow}}
                            <button class="v-button-month-back"
                            v-if="!isButtonBack"
                            @click="monthToNow">
                                <i class="fas fa-angle-right"/>
                    </button>
                </div>
            
        <div>
        <div class="v-show-change-remove" v-if="isVRemoveTable">
            <VRemoveTable :sYear="serviceYear" :group="props.group" :month="monthNow" @cansel="isVRemoveTable=!isVRemoveTable"/>
        </div>
        <table class="v-table">
            <thead class="v-thead">
                <tr>
                    <th>Неделя</th>
                    <th>Будни</th>
                    <th>Выходные</th>
                    
                </tr>
               
            </thead>
            <tbody class="v-tbody">
                <tr>
                    <td>1</td>
                    <td>{{wd.find((el)=>el.data.weekNumber==1)?.data?.total}}</td>
                    <td>{{we.find((el)=>el.data.weekNumber==1)?.data?.total}}</td>
                </tr>
                <tr>
                   <td>2</td>
                   <td>{{wd.find((el)=>el.data.weekNumber==2)?.data?.total}}</td>
                   <td>{{we.find((el)=>el.data.weekNumber==2)?.data?.total}}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{{wd.find((el)=>el.data.weekNumber==3)?.data?.total}}</td>
                    <td>{{we.find((el)=>el.data.weekNumber==3)?.data?.total}}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>{{wd.find((el)=>el.data.weekNumber==4)?.data?.total}}</td>
                    <td>{{we.find((el)=>el.data.weekNumber==4)?.data?.total}}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>{{wd.find((el)=>el.data.weekNumber==5)?.data?.total}}</td>
                    <td>{{we.find((el)=>el.data.weekNumber==5)?.data?.total}}</td>
                </tr>
                <tr>
                    <td><strong>Всего:</strong></td>
                    <td><strong>{{wd.reduce((sum, el)=>sum+el.data.total, 0)}}</strong></td>
                    <td><strong>{{we.reduce((sum, el)=>sum+el.data.total, 0)}}</strong></td>
                </tr>
                <tr>
                    <td><strong>Среднее:</strong></td>
                    <td><strong>{{averageWD}}</strong></td>
                    <td><strong>{{averageWE}}</strong></td>
                </tr>
            </tbody>
        </table>
        </div>
        
    </div>
</template>

<script setup>
   import {ref, computed} from 'vue'
   import {useStore} from 'vuex'
   import {convertMonth, isServiceYear, isCorrectYearAndMonth, isCorrectMonth} from '../modules/convertMonth'
   import VRemoveTable from './v-remove-table.vue'
  
   const props=defineProps ({
       title:{type:String},
       group:{type:String},
       removeIcon:{type:Boolean}
            
   })

  
     
   //date now
   const dateNow=new Date()
   const monthNow=ref(Number(dateNow.getMonth()))
   const yearNow=ref(dateNow.getFullYear())
  
   const store=useStore()
   //++++++++++++++++++++++++++++ correct last week month or first numbers new month
    let o=isCorrectYearAndMonth(Number(yearNow.value), Number(monthNow.value)-isCorrectMonth(dateNow))
    // console.log ('o=', o)
    yearNow.value=o.year
    monthNow.value=o.month


   //_____________________________________________
   
   const tableData =computed(()=>store.getters.FILTER_GROUP(props.group, ''+yearNow.value, ''+monthNow.value))
   const wd=computed(()=>tableData.value.filter(el=>el.data.weekday=='weekdays'))
   const we=computed(()=>tableData.value.filter(el=>el.data.weekday=='weekend'))

   const averageWD=computed(()=>{
       let max=0
       wd.value.forEach(el=>{
           if(el.data.weekNumber>max) max=el.data.weekNumber
       })
       let l=wd.value.length
      
       if (max!=0) {
        //    let num=(wd.value.reduce((sum, el)=>sum+el.data.total, 0)/max).toFixed(2)
           let num=l!=0? (wd.value.reduce((sum, el)=>sum+el.data.total, 0)/l).toFixed(2) :(wd.value.reduce((sum, el)=>sum+el.data.total, 0)).toFixed(2)
      
           return  num
       }
       else return 0
  }) 
  const averageWE=computed(()=>{
       let max=0
       we.value.forEach(el=>{
           if(el.data.weekNumber>max) max=el.data.weekNumber
       })
        let l=we.value.length
        if (max!=0) {
           let num=l!=0? (we.value.reduce((sum, el)=>sum+el.data.total, 0)/l).toFixed(2) :(we.value.reduce((sum, el)=>sum+el.data.total, 0)).toFixed(2)
       
           return  num
       }
       else return 0
   })
   //===========================
const serviceYear=ref(isServiceYear(yearNow.value, monthNow.value))

const isButtonBack=ref(true)
const monthBack=()=>{
   if (monthNow.value==0)
      {
         monthNow.value=11
         yearNow.value-=1
         
      }else {
          monthNow.value-=1
      }
   serviceYear.value=isServiceYear(yearNow.value, monthNow.value)
   isButtonBack.value=!isButtonBack.value
}
const monthToNow=()=>{
   if (monthNow.value==11)
      {
         monthNow.value=0
         yearNow.value+=1
         
      }else {
          monthNow.value+=1
      }
   serviceYear.value=isServiceYear(yearNow.value, monthNow.value)
   isButtonBack.value=!isButtonBack.value
}


let isVRemoveTable=ref(false)
const vRemoveTable=()=>{
    isVRemoveTable.value=true

}
</script>

<style>
   .block-table{
       display: flex;
       flex-direction: column;
       justify-content: center;
        border: 1px solid lightgray;
        margin-top: 10px;
        padding:10px;
        box-shadow: 0 0 8px 0 darkgray;
        /* padding: 10px; */
      
   }
   .v-table{
       border-collapse: collapse;
       border-spacing: 0;
      
       width:100%;
       overflow: hidden;
        /* font-size: 12px; */
       

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
   .v-show-change-remove{
        position: absolute;
        left:auto;
       
        
         background: #fff;
         /* opacity:0.9; */
         z-index:9;
   }
   .v-button-remove{
         display: flex;
         flex-direction:row;
         justify-content: center;
         width:50px;
         height:30px;
         border:1px solid var(--sidebar-icon-color);
         border-radius: 5px;
         margin:10px;

     }
      .v-button-remove:active{
         border:1px solid orange;
     }
     
     .v-button-text-remove{
         align-self: center;
         
         font-size:10px;
         color:var(--sidebar-icon-color)
     }
     .v-button-icon-remove{
         align-self:center;
        
        
         font-size:20px;
         color:#bd1414;
         padding:5px;
        
     }
</style>