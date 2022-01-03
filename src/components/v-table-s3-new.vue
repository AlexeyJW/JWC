<template>
    <div class="block-table">
        <div>
            <h3><strong>Отчёт о посещаемости (S-3) {{props.title}}</strong></h3>
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
   import {convertMonth, isServiceYear} from '../modules/convertMonth'
  
   const props=defineProps ({
       title:{type:String},
       group:{type:String,
              default:'6'
              }
            
   })

  
     
   //date now
   const dateNow=new Date()
   const monthNow=ref(Number(dateNow.getMonth()))
   const yearNow=ref(dateNow.getFullYear())
  
   const store=useStore()
   
   const tableData =computed(()=>store.getters.FILTER_GROUP(props.group, ''+yearNow.value, ''+monthNow.value))
   const wd=computed(()=>tableData.value.filter(el=>el.data.weekday=='weekdays'))
   const we=computed(()=>tableData.value.filter(el=>el.data.weekday=='weekend'))

   const averageWD=computed(()=>{
       let max=0
       wd.value.forEach(el=>{
           if(el.data.weekNumber>max) max=el.data.weekNumber
       })
       if (max!=0) {
           let num=(wd.value.reduce((sum, el)=>sum+el.data.total, 0)/max).toFixed(2)
      
           return  num
       }
       else return 0
  }) 
  const averageWE=computed(()=>{
       let max=0
       we.value.forEach(el=>{
           if(el.data.weekNumber>max) max=el.data.weekNumber
       })

        if (max!=0) {
           let num=(we.value.reduce((sum, el)=>sum+el.data.total, 0)/max).toFixed(2)
       
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
</style>