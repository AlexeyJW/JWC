<template>
    <div class="v-auth">
       <div class="v-auth-title">
            <img src="../assets/images.png" class="v-auth-img-title">
            <h2 class="v-auth-title"><strong>Добро пожаловать в учёт!</strong></h2>
       </div>
       <div class="v-auth-content">
            <img src="../assets/confirm.png" alt="logo google" class="v-auth-img-confirm">
            <h4 class="v-auth-title">Пожалуйста авторизуйтесь</h4>
       </div>
      
       <button class="v-auth-button" @click="logGoogle"><img src="../assets/google.png" alt="logo google" class="v-auth-img">GOOGLE</button>
       
    </div>
</template>

<script setup>
import {resGoogle} from '../modules/initFB.js'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
const store=useStore()
const router=useRouter()
const logGoogle=()=>{
    resGoogle()
    .then((el)=>{
        console.log(el)
        if (el!=undefined) {
        store.dispatch('GET_GROUP_USER', el?.email)
        // store.commit('SET_USER_PHOTO', el?.reloadUserInfo.photoUrl)
        store.commit('SET_USER_PHOTO', el?.photoURL.toString())
        store.commit('SET_IS_AUTH')
        store.dispatch('GET_TOTAL_GROUPS')
        store.dispatch('LISTEN_S88')
        store.dispatch('LISTEN_S3')
        store.dispatch('AVERAGE_S88', '2022')
        }else router.push({name:'Home'})
    })
   
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
        max-width:500px;
        font-family: 'Microsoft YaHei UI Light', sans-serif;
              /*          фон в клеточку    */
        background: linear-gradient( #bbb, transparent 1px), linear-gradient( 90deg, #bbb, transparent 1px);
        background-size: 15px 15px;
        background-position: center center;

}
.v-auth-img-title{
    align-self:flex-start;
    width:150px;
    height:120px;
}
.v-auth-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:10px;
    
}
.v-auth-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:10px;
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