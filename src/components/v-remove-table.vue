<script setup>
    import {convertMonth} from '../modules/convertMonth.js'
    import {useStore} from 'vuex'
    import {ref} from 'vue'
    import VConfirm from './v-confirm.vue'
    import VPreloader from './v-preloader.vue'

    const props=defineProps({
        sYear:{type:Number},
        month:{type:Number},
        group:{type:String}
    })

    const emit=defineEmits(['cansel'])
    const store=useStore()
    let obj={
        group:props.group,
        month:props.month,
        serviceYear:props.sYear
    }
   
    let wd=ref([])
    let we=ref([])

    const compareW=(a, b)=>{
        if (a.data.weekNumber< b.data.weekNumber) return -1
        if (a.data.weekNumber== b.data.weekNumber) return 0
        if (a.data.weekNumber > b.data.weekNumber) return 1
    }

    const isPreloader=ref(true)
    const initRTable=()=>{
    store.dispatch('REQUEST_S3', obj)
      .then((el)=>{
          isPreloader.value=false       
          wd.value=el.filter(el=>el.data.weekday=='weekdays').sort(compareW )
          we.value=el.filter(el=>el.data.weekday=='weekend').sort(compareW)
        })
    }
    initRTable()
    const isConfirmRemove=ref(false)
    const idRemove=ref(null)
    const removeOK=()=>{
        store.dispatch('DEL_S3', idRemove.value)
       
        isConfirmRemove.value=false
        idRemove.value=null 
        initRTable()  
        isPreloader.value=true    
    }
    const removeCansel=()=>{
        isConfirmRemove.value=false
        idRemove.value=null       
    }
    const removeW=id=>{
        isConfirmRemove.value=true
        idRemove.value=id
       
    }
    
    
   
    
</script>
<template>
   <div class="v-block-table-s88">
        <div class="v-button-block">
             <h4><strong>Данные по группе: {{props.group}}.  {{convertMonth(props.month)}}</strong></h4>
            <div class="v-button-remove" @click="emit('cansel')">
              Закрыть
            </div>
             <span v-if="isPreloader"><v-preloader/></span>
        </div>

        <h5>Будни</h5>
       
        <table class="v-table-s88">
            <thead>
                <tr>
                    <th>Неделя</th>
                    <th>Дата</th>
                    <th>К-во</th>
                    <th>Действие</th>
                </tr>
            </thead>
             
            <tbody>
               
                <tr v-for="i in wd" :key="i.id">
                    <td>{{i.data.weekNumber}}</td>
                    <td>{{i.data.date}}</td>
                    <td>{{i.data.total}}</td>
                    <td @click="removeW(i.id)"><i class="fas fa-trash"/></td>
                </tr>  
            </tbody>
        </table>
         <h5>Выходные</h5>
        <table class="v-table-s88">
            <thead>
                <tr>
                    <th>Неделя</th>
                    <th>Дата</th>
                    <th>К-во</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="j in we" :key="j.id">
                    <td>{{j.data.weekNumber}}</td>
                     <td>{{j.data.date}}</td>
                    <td>{{j.data.total}}</td>
                    <td @click="removeW(j.id)"><i class="fas fa-trash"/></td>
                </tr>  
            </tbody>
        </table>
   </div> 
   <span class="v-span" v-if="isConfirmRemove"><v-confirm  @pressedCancel="removeCansel" @pressedOK="removeOK">Удалить данные?</v-confirm></span>
   
</template>
<style>
 .v-button-remove{
     border: 1px solid lightgray;
     border-radius: 5px;
     height: 30px;
     width:100px;
     align-self: center;
     text-align: center;
      
     margin-left: 80px;
     display:flex;
     align-items: center;
     font-size:12px;
 }
</style>