<template>
    <div class="v-input">
       
        <div class="v-input-content">
        
        <div class="v-input-group">
            <h5 class="v-input-label">Группа:</h5>
            <select ref="selectRoot" class="field-select" v-model="Group" :disabled="role" v-if="!role" >
                <option disabled selected>Выбери номер</option>
                <option v-for="i in groupsData" :key="i" :value="i">{{i}}</option>
            </select>
            <div  class="v-input-else" v-else>{{Group}}</div>
        </div>
        <div class="v-input-group">
            <h5 class="v-input-label">Неделя:</h5>
            <select class="field-week-number"
               v-model="WeekNumber"
               name='Week'
               id="week"
               :disabled="role" v-if="!role" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            
            </select>
            <div  class="v-input-else" v-else>{{WeekNumber}}</div>
        </div>
        <div class="v-input-group">
            <h5 class="v-input-label input-weekdays">Будн./Вых.:</h5>
            <select  class="v-field-weekday" name="weekday" v-model="Weekday" id="w" :disabled="role" v-if="!role" >
                <option disabled selected>Выбери:</option>
                <option value="weekdays">Будни</option>
                <option value="weekend">Выходные</option>
            </select>
            <div class="v-input-else input-weekdays" v-else>{{Weekday=='weekdays'?'Будни':'Выходные'}}</div>
        </div>
        
        <div class="v-input-group-block">
            <div class="v-input-group" >
                <h5 class="v-input-label" >Дата встречи:</h5>
                <input class="field-data"  type="date" v-model="vDate"/>
            </div>
            <div class="v-input-group" >
                <h5 class="v-input-label">Всего:</h5>
                <input class="v-field-input" type="number" placeholder="число" v-model="vTotal" id="total"/>
            </div>
            </div>
        
            <div class="v-input-group">
                <h5 class="v-input-label">Отправить:</h5>
                <v-button class="v-input-group-field-button" textButton="Send"  @click="sendObj"/>
            </div>
        
     
     </div>
    </div>
    <span class="v-span" v-if="isConfirm"><v-confirm  @pressedCancel="isConfirm=!isConfirm" @pressedOK="confirmPressedOK">Уже есть запись, хотите её заменить?</v-confirm></span>
    <span class="v-span" v-if="isConfirmForIsAll"><v-confirm  @pressedCancel="isConfirmForIsAll=!isConfirmForIsAll" @pressedOK="isConfirmForIsAll=!isConfirmForIsAll">Введите недостающие данные</v-confirm></span>
     <span class="v-span" v-if="isConfirmDate"><v-confirm  @pressedCancel="isConfirmDate=!isConfirmDate" @pressedOK="isConfirmDate=!isConfirmDate">Этот месяц уже закрыт для ввода! Измените дату</v-confirm></span> 
     <span class="v-span" v-if="isFuture"><v-confirm  @pressedCancel="isFuture=!isFuture" @pressedOK="isFuture=!isFuture">Это будущее, оно ещё не настало! Измените дату</v-confirm></span> 
     <span class="v-span" v-if="isCheck">
        <div class="v-check">
         Вам ещё нужно ввести:
          <ol>
             <li v-for="i in arrCheck" :key="i">{{i.month}} {{i.weekNumber}}-я нед.-{{i.weekday}} </li>
          </ol>
          <v-button class="v-input-group-field-button" textButton="OK"  @click="isCheck=!isCheck"/>
        </div>
    </span>
     <div  :class="{activeoverflow: isConfirm}"></div>
    <!-- <span class="reminder" v-if="rem">
           
            <div>Новое: Теперь вводите точную дату встречи и число присутствующих, остальные данные вычисляются сами ;)</div>
            <div>Спасибо за ваш труд!</div>
            <div class="reminder-button"><v-button textButton="OK"  @click="store.commit('SET_REMINDER', false)"/></div>
    </span> -->
</template>
   
<script setup>
import VButton from './v-button.vue'
import vConfirm from './v-confirm.vue'
import {isCorrectMonth, isServiceYear, isCorrectYearAndMonth, calcWeekNumber, checkInputBefore} from '../modules/convertMonth.js'
import {ref, computed, watchEffect} from 'vue'
import {useStore} from 'vuex'
const store=useStore()


//----------Date Now----------------------
const dateNow=new Date()
const yearNow=dateNow.getFullYear()
let monthNow=dateNow.getMonth()
// const sundayArr=sundayMonth(yearNow, monthNow)
const serviceYear=isServiceYear(yearNow, monthNow)

//limit date before
let monthBefore
let yearBefore
if (monthNow==0){
    monthBefore=11
    yearBefore=Number(yearNow)-1
}else{
    monthBefore=monthNow-1
    yearBefore=yearNow
}

//----------------------------------------

const isConfirm=ref(false)
const isConfirmForIsAll=ref(false)
const Group=ref('')
const selectRoot=ref(null)
const groupsData=computed(()=>store.getters.GET_NAME_GROUPS)
const role=ref(true)
const groupUser=computed(()=>store.getters.GET_VUSER_GROUP)




//Вводим данные в поля инпутов при открытии (инициализируем поля)
let initDate=''+yearNow+"-"+((monthNow+1)<10?"0"+(monthNow+1):(monthNow+1))+"-"+(dateNow.getDate()<10?"0"+dateNow.getDate():dateNow.getDate())
const vDate=ref(initDate)

const vTotal=ref(null)

const Weekday=ref('')
// init WeekNumber
const WeekNumber=ref(null)


watchEffect(()=>{
    Group.value=groupUser.value
    WeekNumber.value=calcWeekNumber(Number(vDate.value.slice(0,4)), Number(vDate.value.slice(5,7)-1), Number(vDate.value.slice(-2)))?.week ??null
    Weekday.value=(new Date(vDate.value).getDay()==0|| new Date(vDate.value).getDay()==6) ?'weekend':'weekdays' 
    role.value=store.state.vUserRole=='admin'?false: true
    // console.log(role.value)
})


// создаю переменную для выборки месячной проверки
let bd=null

const isRecord=(obj)=>{
  let o=isCorrectYearAndMonth(Number(vDate.value.slice(0,4)), Number(vDate.value.slice(5,7)-1)-isCorrectMonth(new Date(vDate.value)))  
  bd=null

 //вставка
  bd=store.getters.GET_S3((o?.year).toString(),  o?.month)
//end

  return bd.find(el=>el.data.group==obj.group && el.data.weekNumber==obj.weekNumber&& el.data.weekday==obj.weekday)
}

const prepareTheObj=()=>{
        let o=isCorrectYearAndMonth(Number(vDate.value.slice(0,4)), Number(vDate.value.slice(5,7)-1)-isCorrectMonth(new Date(vDate.value)))
      
        const obj={
            month: o?.month,
            year: (o?.year).toString(),
            yearService:Number(serviceYear),
            weekday:Weekday.value,
            weekNumber:Number(WeekNumber.value),
            group:Group.value,
            date:vDate.value,
            total:vTotal.value,
            author:store.getters.GET_VUSER
        }
        return obj
}

const isAll=()=>{    
    if (Group.value==''|| WeekNumber.value==null || Weekday.value==''|| vDate.value==null||vTotal.value==null || vTotal.value==0) return false
    else return true
    }
// for alert if earlier data has not been input
const beforeDate=()=>{}
let isConfirmDate=ref(false)
let arrCheck=ref([])
let isCheck=ref(false)
let isFuture=ref(false)

async function sendObj(){
  if (dateNow >= new Date(vDate.value)){
     if (arrCheck.value.length>0) arrCheck.value=[]
     if (!isAll()) isConfirmForIsAll.value=true
     else{
        let sendObj=prepareTheObj()   
          //check date, limit -1 month
        // console.log("limit date=", new Date(yearBefore, monthBefore, 1))
        if (new Date(sendObj.date)< new Date(yearBefore, monthBefore, 1)){
            isConfirmDate.value=true
        } 
        else {
            if (typeof isRecord(sendObj)!='object'){
            
                await store.dispatch('ADD_S3', sendObj)
                // arrCheck.value=checkInputBefore(sendObj.group, store.state.s3, new Date(sendObj.date), monthBefore, yearBefore)
                arrCheck.value=checkInputBefore(sendObj.group, store.state.s3, dateNow, monthBefore, yearBefore)
                // console.log('arrCheck=',arrCheck.value)
                if (arrCheck.value.length>0){
                    isCheck.value=true
                }
                vTotal.value=null
            }
            else {
        
            isConfirm.value=true
            }
      }
     }
  }else {
      isFuture.value=true
  }
}  
const confirmPressedOK=()=>{
     
      let sendObj=prepareTheObj()
      let backRacord=null
   
      backRacord=bd.find(el=>el.data.group==sendObj.group && el.data.weekNumber==sendObj.weekNumber && el.data.weekday==sendObj.weekday)
    
      store.dispatch('MODI_S3',{id:backRacord.id, obj:sendObj})
      isConfirm.value=!isConfirm.value
}


// if (store.state.isReminder)
//     setTimeout(()=>store.commit('SET_REMINDER', false), 8000)
</script>
   
<style>
   
    .v-input{
       
        padding: 10px;
       
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
    .v-input-group-block{
        display: flex;
        flex-direction: row;
        
    }
   
    .v-input-else{
        align-self:center;
       
    }
    .input-weekdays{
        
        min-width: 78px;
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
   .reminder{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        margin:auto;
        padding:5px;
        position:absolute;
        max-width:500px;
        border:1px solid var(--sidebar-bg-color);
         z-index:9999999;
         color:#2682be;
         font-size:25px;
         background:#e2d8d8;
        
   }
   .reminder-button{
      margin:20px;
   }
   .activeR{
      
       background:#e2d8d8;
       border-radius: 50%;
       
   }
   .v-check{
       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;
       color: red;
       background: #fff;
       padding:5px;
       border: 1px solid lightgrey;
       box-shadow: 0 0 8px 0 darkgray;
   }
</style>