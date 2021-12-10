<template>
    <div class="v-admin">
        <h3 class="v-admin-title">Admin page</h3>
        <div class="v-admin-groups">
            <h4 class="label-admin">total groups:</h4>
            <div class="total-groups">
                <input type="number" class="total-groups-input" v-model="totalGroups"/>
                <v-button textButton="Change" @click="isConfirmAdmin=true"/>
                <span class="v-span-admin" v-if="isConfirmAdmin">
                    <v-confirm @pressedCancel="isConfirmAdmin=!isConfirmAdmin" @pressedOK="changeTotalGroups">Вы уверены?</v-confirm>
                </span>
            </div>
        </div>
        <div class="v-admin-analytics">analytics</div>
    </div>
</template>

<script setup>
import VButton from './v-button.vue'
import vConfirm from './v-confirm.vue'
import {ref, computed} from 'vue'
import {analytics} from '../modules/initFB.js'
import {useStore} from 'vuex'
import VConfirm from './v-confirm.vue'
const isConfirmAdmin=ref(false)
const store=useStore()
const totalGroups=computed(()=>store.getters.GET_TOTAL_GROUPS)
console.log(analytics)
const changeTotalGroups=()=>{
    if (totalGroups.value >2) store.dispatch('CHANGE_TOTAL_GROUPS', totalGroups.value)
    isConfirmAdmin.value=false
}
</script>

<style>
  .v-admin{
       display: flex;
       flex-direction: column;
       justify-content: center;
       border: 1px solid lightgray;
       margin-top: 10px;
       padding:10px;
       box-shadow: 0 0 8px 0 darkgray;
  }
  .v-admin-groups{
      display: flex;
      flex-direction: column;
      justify-content:flex-start;
      align-items:flex-start;
      margin-left: 10px;
     
  }
  .total-groups-input{
      margin-right: 5px;
  }
  .total-groups{
      display: flex;
      flex-direction: row;
      align-items:center;
  }
  .label-admin{
      color:lightgrey;
      margin-bottom:5px;
  }
  .v-span-admin{
         position:absolute;
         top:150px; 
         
         left:30%;
         z-index:999999;
    }
</style>