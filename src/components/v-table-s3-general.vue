<template>
    <div class="block-table-general">
        <div class="v-button-block">
            <h3><strong>Общий отчёт о посещаемости встреч (S-3)</strong></h3>
            <div v-if="store.getters.GET_VUSER_ROLE=='admin'">
                <v-button class="v-button-item" textButton="Send" @click="sendReport" v-show="isSend"/>
                <v-button class="v-button-item" textButton="Modify" @click="modifyReport" v-show="!isSend"/>
            </div>
            
        </div>
        <div class="v-button-block">
             <button class="v-button-month-back" 
                       v-if="isButtonBack"
                       @click="monthBack">
                         <i class="fas fa-angle-left"/>
                    </button>
                    {{convertMonth(monthNow)}}
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
                    <td :class="{active:isAllReportsWD(1)}">{{wd1}}</td>
                    <td :class="{active:isAllReportsWE(1)}">{{we1}}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td :class="{active:isAllReportsWD(2)}">{{wd2}}</td>
                    <td :class="{active:isAllReportsWE(2)}">{{we2}}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td :class="{active:isAllReportsWD(3)}">{{wd3}}</td>
                    <td :class="{active:isAllReportsWE(3)}">{{we3}}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td :class="{active:isAllReportsWD(4)}">{{wd4}}</td>
                    <td :class="{active:isAllReportsWE(4)}">{{we4}}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td :class="{active:isAllReportsWD(5)}">{{wd5}}</td>
                    <td :class="{active:isAllReportsWE(5)}">{{we5}}</td>
                </tr>
                <tr>
                    <td><strong>Всего:</strong></td>
                    <td><strong>{{totalWD}}</strong></td>
                    <td><strong>{{totalWE}}</strong></td>
                </tr>
                <tr>
                    <td><strong>Среднее:</strong></td>
                    <td>{{avWD}}</td>
                    <td>{{avWE}}</td>
                </tr>
            </tbody>
        </table>
       
        </div>

    </div>
     <span class="v-span-s3" v-if="isCheckSend"><v-confirm  @pressedCancel="pressOKandCancel" @pressedOK="pressOKandCancel">Ещё не все группы ввели данные за все недели!</v-confirm></span> 
</template>

<script setup>
   import {computed, ref} from 'vue'
   import {useStore} from 'vuex'
   import vButton from './v-button.vue'
   import {convertMonth, isServiceYear, isCorrectYearAndMonth, isCorrectMonth, mondayMonth} from '../modules/convertMonth'
   import VConfirm from './v-confirm.vue'
   const props=defineProps({
       title:{type:String},
      
      
   })
  
   
   //date now
   const dateNow=new Date()
   const monthNow=ref(Number(dateNow.getMonth()))
   const yearNow=ref(dateNow.getFullYear())
   const serviceYear=ref(isServiceYear(yearNow.value, monthNow.value))
   
   const store=useStore()

 //++++++++++++++++++++++++++++ correct last week month or first numbers new month
    let o=isCorrectYearAndMonth(Number(yearNow.value), Number(monthNow.value)-isCorrectMonth(dateNow))
  
    yearNow.value=o.year
    monthNow.value=o.month


   //_____________________________________________
   

// Переключатель кнопки Send / Modify
   const buttonSendModify=(yearS, month)=>{
       if(store.state.s88.find(el=>el.month==month && el.yearService==yearS))
           store.commit('SET_IS_BUTTON_SEND_S3_FALSE')
       else
          store.commit('SET_IS_BUTTON_SEND_S3_TRUE')
   }
   buttonSendModify(serviceYear.value, monthNow.value)
   const isButton=ref(true)
  
  
   const isSend=computed(()=>store.state.isButtonSendS3)
   const sum=computed(()=>store.getters.FILTER_ALL_GROUPS(''+yearNow.value, monthNow.value))
   const arrWD=computed(()=>store.getters.GET_S3(''+yearNow.value, monthNow.value).filter(el=>el.data.weekday=='weekdays'))
   const arrWE=computed(()=>store.getters.GET_S3(''+yearNow.value, monthNow.value).filter(el=>el.data.weekday=='weekend'))
//    const allReports=ref(false)
  
   const isCheckSend=ref(false)

   
 

   const pressOKandCancel=()=>
     {
        
         isCheckSend.value=false
     }

   const isAllReportsWD=(week)=>{
       let all=0
       arrWD.value.forEach(el=>{
           if (el.data.weekNumber==week) all++
       })
      
       if (all!=store.getters.TOTAL_GROUPS)
          {
           
           return true
          } 
       
       return false
   }

    const isAllReportsWE=(week)=>{
       let all=0
       arrWE.value.forEach(el=>{
           if (el.data.weekNumber==week) all++
       })
      
       if (all!=store.getters.TOTAL_GROUPS)
          {
          
           return true
          } 
       
       return false
   }

//general data for table
const wd1=computed(()=>arrWD.value.filter(el=>el.data.weekNumber==1).reduce((sum, el)=>sum+el.data.total, 0))
const wd2=computed(()=>arrWD.value.filter(el=>el.data.weekNumber==2).reduce((sum, el)=>sum+el.data.total, 0))
const wd3=computed(()=>arrWD.value.filter(el=>el.data.weekNumber==3).reduce((sum, el)=>sum+el.data.total, 0))
const wd4=computed(()=>arrWD.value.filter(el=>el.data.weekNumber==4).reduce((sum, el)=>sum+el.data.total, 0))
const wd5=computed(()=>arrWD.value.filter(el=>el.data.weekNumber==5).reduce((sum, el)=>sum+el.data.total, 0))

const we1=computed(()=>arrWE.value.filter(el=>el.data.weekNumber==1).reduce((sum, el)=>sum+el.data.total, 0))
const we2=computed(()=>arrWE.value.filter(el=>el.data.weekNumber==2).reduce((sum, el)=>sum+el.data.total, 0))
const we3=computed(()=>arrWE.value.filter(el=>el.data.weekNumber==3).reduce((sum, el)=>sum+el.data.total, 0))
const we4=computed(()=>arrWE.value.filter(el=>el.data.weekNumber==4).reduce((sum, el)=>sum+el.data.total, 0))
const we5=computed(()=>arrWE.value.filter(el=>el.data.weekNumber==5).reduce((sum, el)=>sum+el.data.total, 0))

const totalWD=computed(()=>arrWD.value.reduce((sum, el)=>sum+el.data.total, 0))
const totalWE=computed(()=>arrWE.value.reduce((sum, el)=>sum+el.data.total, 0))

const kvoWD=ref(0)
const kvoWE=ref(0)

const avWD=computed(()=>{
  let arr=[wd1.value,wd2.value,wd3.value,wd4.value,wd5.value].filter(el=>el!=0)
  kvoWD.value=arr.length
  return kvoWD.value!=0? (totalWD.value/kvoWD.value).toFixed(2):0
})
const avWE=computed(()=>{
  let arr=[we1.value,we2.value,we3.value,we4.value,we5.value].filter(el=>el!=0)
  kvoWE.value=arr.length
  return kvoWE.value!=0? (totalWE.value/kvoWE.value).toFixed(2):0
})


const prepareTheReport=()=>{
    let obj={
        averageWD:Number(avWD.value),
        averageWE:Number(avWE.value),
        month:Number(monthNow.value),
        totalMeetingsWD:kvoWD.value,
        totalMeetingsWE:kvoWE.value,
        totalWD:totalWD.value,
        totalWE:totalWE.value,
        yearService:serviceYear.value
    }
    return obj
}
setTimeout(()=>{
    let d=store.getters.YEAR_SERVICE(serviceYear.value)
    if(d.find(el=>el.month==Number(monthNow.value))){
         
              store.commit('SET_IS_BUTTON_SEND_S3_FALSE')
          } 
          }, 1000)

// check all groups input the reports
const checkAllGroupsInputReports=()=>{
    let mon=mondayMonth(yearNow.value, monthNow.value)
    // console.log(arrWD.value.length)
    // console.log(mon.length)
    if(arrWD.value.length==mon.length*store.getters.TOTAL_GROUPS && arrWE.value.length==mon.length*store.getters.TOTAL_GROUPS) return true
    else return false
}




const sendReport=()=>{
    if (checkAllGroupsInputReports()){
        store.dispatch('ADD_S88', prepareTheReport())
        store.commit('SET_IS_BUTTON_SEND_S3_FALSE')
        
    }else {
        isCheckSend.value=true
         }  
    
}

const modifyReport=()=>{
   if (checkAllGroupsInputReports()){
       store.dispatch('MODI_S88', prepareTheReport())
    
   }else{
        isCheckSend.value=true
        }
    
}

//Button back
//заморочка с месяцами и годами

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
   buttonSendModify(serviceYear.value, monthNow.value)
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
   buttonSendModify(serviceYear.value, monthNow.value)
   isButtonBack.value=!isButtonBack.value
}

</script>

<style>
   .block-table-general{
       display: flex;
       flex-direction: column;
       justify-content: center;
       border: 1px solid lightgray;
       margin-top: 10px;
       margin-bottom: 10px;
       box-shadow: 0 0 8px 0 darkgray;
       padding: 10px;
     
      
   }
   .v-button-block{
       display:flex;
       flex-direction:row;
       align-items: center;
       justify-content: center;
  
      
       
   }
   .v-button-month-back{
       background:var(--sidebar-bg-color);
       margin:5px;
       color:white;
   }
   .v-button-item{
       margin-left: 20px;
   }
   .v-table{
       border-collapse: collapse;
       border-spacing: 0;
       width:100%;
       overflow: hidden;
      
       

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
   .v-td{
       color:black;
   }
   .active{
       color:#539b9b;
        
   }
   .v-span-s3{
         position:absolute;
         top: 500px;
         left: 50%;
         transform: translate(-50%, -50%);
         z-index:999999;
    }
</style>