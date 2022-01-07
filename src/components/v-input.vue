<template>
    <div class="v-input">
       
        <div class="v-input-content">
        
        <div class="v-input-group">
            <h5 class="v-input-label">Группа:</h5>
            <select ref="selectRoot" class="field-select" v-model="Group" >
                <option disabled selected>Выбери номер</option>
                <option v-for="i in groupsData" :key="i" :value="i">{{i}}</option>
            </select>
        </div>
        <div class="v-input-group">
            <h5 class="v-input-label">Неделя:</h5>
            <select class="field-week-number" v-model="WeekNumber" name='Week' id="week">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            
            </select>
        </div>
        <div class="v-input-group">
            <h5 class="v-input-label">Будн./Вых.:</h5>
            <select  class="v-field-weekday" name="weekday" v-model="Weekday" id="w">
                <option disabled selected>Выбери:</option>
                <option value="weekdays">Будни</option>
                <option value="weekend">Выходные</option>
            </select>
        </div>
        
        
        <div class="v-input-group">
            <h5 class="v-input-label">Дата встречи:</h5>
            <input class="field-data"  type="date" v-model="vDate"/>
        </div>
        <div class="v-input-group">
            <h5 class="v-input-label">Всего:</h5>
            <input class="v-field-input" type="number" placeholder="число" v-model="vTotal" id="total"/>
        </div>
        <div class="v-input-group">
            <h5 class="v-input-label">Отправить:</h5>
            <v-button class="field-button" textButton="Send"  @click="sendObj"/>
        </div>
        
     
     </div>
    </div>
    <span class="v-span" v-if="isConfirm"><v-confirm  @pressedCancel="isConfirm=!isConfirm" @pressedOK="confirmPressedOK">Уже есть запись, хотите её заменить?</v-confirm></span>
    <span class="v-span" v-if="isConfirmForIsAll"><v-confirm  @pressedCancel="isConfirmForIsAll=!isConfirmForIsAll" @pressedOK="isConfirmForIsAll=!isConfirmForIsAll">Введите недостающие данные</v-confirm></span>
     <div  :class="{activeoverflow: isConfirm}"></div>
</template>
   
<script setup>
import VButton from './v-button.vue'
import vConfirm from './v-confirm.vue'
import {isCorrectMonth, isServiceYear, isCorrectYearAndMonth} from '../modules/convertMonth.js'
import {ref, computed, watchEffect} from 'vue'
import {useStore} from 'vuex'
const store=useStore()


//----------Date Now----------------------
const dateNow=new Date()
const yearNow=dateNow.getFullYear()
let monthNow=dateNow.getMonth()
// const sundayArr=sundayMonth(yearNow, monthNow)
const serviceYear=isServiceYear(yearNow, monthNow)

//----------------------------------------

const isConfirm=ref(false)
const isConfirmForIsAll=ref(false)
const Group=ref('')
const selectRoot=ref(null)
const groupsData=computed(()=>store.getters.GET_NAME_GROUPS)

const groupUser=computed(()=>store.getters.GET_VUSER_GROUP)


watchEffect(()=>{
    Group.value=groupUser.value
    
})

//Вводим данные в поля инпутов при открытии (инициализируем поля)
let initDate=''+yearNow+"-"+((monthNow+1)<10?"0"+(monthNow+1):(monthNow+1))+"-"+(dateNow.getDate()<10?"0"+dateNow.getDate():dateNow.getDate())
const vDate=ref(initDate)
// console.log(initDate)
const vTotal=ref(null)
const Weekday=ref((dateNow.getDay()==0||dateNow.getDay()==6)?'weekend':'weekdays')
const WeekNumber=ref(null)

// создаю переменную для выборки месячной проверки
let bd=null
// функция проверки, есть ли уже запись на выбранную встречу
// старый вариант - есть ошибка с датами выборки- нужно выбирать по vDate
// const isRecord=(obj)=>{
//     let yearBd=yearNow
//     let monthBd=monthNow
//     if (monthNow==0 && isCorrectMonth(new Date(vDate.value))==1) //!!!!! 
//         {
//             yearBd-=1
//             monthBd=11
//         }
//     else if(isCorrectMonth(new Date(vDate.value))==1)
//         {
//             monthBd-=1
//         }
//     bd=store.getters.GET_S3(''+yearBd, monthBd)
//     console.log("bd=", bd)
//     return bd.find(el=>el.data.group==obj.group&& el.data.weekNumber==obj.weekNumber&& el.data.weekday==obj.weekday)
// }
// новый вариант
const isRecord=(obj)=>{
  let o=isCorrectYearAndMonth(Number(vDate.value.slice(0,4)), Number(vDate.value.slice(5,7)-1)-isCorrectMonth(new Date(vDate.value)))  
  bd=null
//  bd=store.getters.GET_S3(vDate.value.slice(0,4), vDate.value.slice(5,7)-1 )
 //вставка
  bd=store.getters.GET_S3((o?.year).toString(),  o?.month)
//end
//   console.log("isRecord bd=",bd)
  return bd.find(el=>el.data.group==obj.group && el.data.weekNumber==obj.weekNumber&& el.data.weekday==obj.weekday)
}

const prepareTheObj=()=>{
        let o=isCorrectYearAndMonth(Number(vDate.value.slice(0,4)), Number(vDate.value.slice(5,7)-1)-isCorrectMonth(new Date(vDate.value)))
        const obj={
            month: o?.month,
            year: (o?.year).toString(),
            yearService:Number(serviceYear),
            weekday:Weekday.value,
            weekNumber:WeekNumber.value,
            group:Group.value,
            date:vDate.value,
            total:vTotal.value,
            author:store.getters.GET_VUSER
        }
        return obj
}
// const isAll=(obj)=>{
const isAll=()=>{    
    if (Group.value==''|| WeekNumber.value==null || Weekday.value==''|| vDate.value==null||vTotal.value==null ) return false
    else return true
    }

const sendObj=()=>{
     if (!isAll()) isConfirmForIsAll.value=true
     else{
        let sendObj=prepareTheObj()   
        if (typeof isRecord(sendObj)!='object'){
            //  console.log("sendObj=",sendObj)
             store.dispatch('ADD_S3', sendObj)
        }
        else {
        //  console.log("sendObj typeof isRecord=", typeof isRecord())
         isConfirm.value=true
        }
     }
}  
const confirmPressedOK=()=>{
      let sendObj=prepareTheObj()
      let backRacord=null
    //   console.log("confirmPessedOK  bd=", bd)
      backRacord=bd.find(el=>el.data.group==sendObj.group && el.data.weekNumber==sendObj.weekNumber && el.data.weekday==sendObj.weekday)
    //   console.log("backRacord", backRacord.id)
      store.dispatch('MODI_S3',{id:backRacord.id, obj:sendObj})
      isConfirm.value=!isConfirm.value
}
</script>
   
<style>
   
    .v-input{
        /* display: flex;
        flex-direction: row;
        align-items: stretch; */
        padding: 10px;
        /* flex-direction:column; */
        border:1px solid lightgray;
        box-shadow: 0 0 8px 0 darkgray;
        margin-top:10px;
    }
     .v-input-label{
        align-self:flex-start;
        margin:2px;
        font-size:10px;
        font-weight: lighter;
        color:grey;
       
    }
    .v-input-group{
        display: flex;
        flex-direction: column;
        justify-content:flex-end;
        align-items:flex-end;
    }
   
    .v-input-content{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        border:1px solid #539b9b;
        padding:5px;
        margin:5px;
       
    }
    .field-data, .field-select{
        margin-right:5px;
        top:-30;
    }
    .v-field-input{
        max-width:60px;
        margin-right:5px;
    }
    .v-field-weekday{
        max-width:100px;
    }
   
    .v-span{
         position:absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         z-index:999999;
    }
   
   .activeoverflow{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.2);
        z-index: 2;
   }
</style>