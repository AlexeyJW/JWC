<template>
    <div class="v-confirm">
         <div class="v-confirm-button">
              <img src="../assets/confirm.png">
             <h4><slot></slot></h4>
         </div>
       
        <div class="v-confirm-button">
            <v-button class="v-confirm-ok" textButton="OK" colorButton="red" @click="pOK"/>
            <v-button class="v-confirm-cancel" textButton="Cancel" @click="pCancel"/>
        </div>
    </div>
    
</template>
<script setup>
  import vButton from './v-button.vue'

  const emits=defineEmits(['pressedOK', 'pressedCancel'])
  const pOK=()=>emits('pressedOK')
  const pCancel=()=>emits("pressedCancel")
</script>
<style>
   .v-confirm{
       display: flex;
       flex-direction:column;
       align-items:center;
       width:300px;
      
       background:lightcyan;
       border:1px solid gray;
      

   }
   .v-confirm-button{
       display: flex;
       flex-direction:row;
       justify-content:center;
       padding:5px;
   }
   .v-confirm-cancel{
       margin-left:10px;
   }
</style>