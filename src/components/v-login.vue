<template>
    <div class="v-auth">
       <h2 class="v-auth-title"><img src="../assets/confirm.png" alt="logo google" class="v-auth-img-confirm"><strong>Добро пожаловать в учёт!</strong></h2>
       
       <h4 class="v-auth-title">Пожалуйста авторизуйтесь</h4>
       <button class="v-auth-button" @click="logGoogle"><img src="../assets/google.png" alt="logo google" class="v-auth-img">GOOGLE</button>
       
    </div>
</template>

<script setup>
import {resGoogle} from '../modules/initFB.js'
// import {ref} from 'vue'
// import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
const store=useStore()
// const router=useRouter() 

// let vUser=ref('')
 const logGoogle=()=>{
    resGoogle()
    .then((el)=>{
        console.log(el)
        store.commit('SET_VUSER', el?.displayName)
        store.commit('SET_IS_AUTH')
    }) 
    // console.log(user?.displayName??'no user')
    // vUser.value=user?.displayName

}

</script>

<style>
.v-auth{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        border: 1px solid lightgray;
        margin: 10px;
        box-shadow: 0 0 8px 0 darkgray;
        padding: 15px;
        width:600px;
        font-family: 'Microsoft YaHei UI Light', sans-serif;
}
.v-auth-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:10px;
    border-bottom:1px solid lightgray;

}
.v-auth-button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    border:1px solid lightgray;
    background: white;
    margin: 10px;
}
.v-auth-button:active{
       border: 1px solid orange;
   }
.v-auth-img{
    width:50px;
    height:50px;
}
.v-auth-img-confirm{
    width:100px;
    height:100px;
}

</style>