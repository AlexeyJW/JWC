<template>
    
    <div class="v-block-table-s88">
      <h3 class="v-admin-title">Admin page</h3>
      <div class="v-admin-backend">  
        <div class="v-admin-groups">
            <h4 class="label-admin">total groups:</h4> 
            <h4 class="label-admin-backend">Now: {{totalGroups}}</h4>
            <div class="total-groups">
                <input class="v-admin-input" type="number"  v-model="newTotalGroups"/>
            </div>
            <h4 class="label-admin">Name groups:</h4> 
            <h4 class="label-admin-backend">Now: {{nameGroups}}</h4>
            <input class="v-admin-input" type="text" v-model="newNameGroups"/>
            <v-button class="v-admin-group-button" textButton="Change" @click="isConfirmAdmin=true"/>
        </div>
        <div class="v-admin-analytics">
            <h3 class="v-admin-analytics-title">Analytics</h3>

        </div><!-- End Analytics  -->
        <div class="v-admin-users">
            <h3 class="v-admin-users-title">Users</h3>
            <table class="v-table-s88">
                <thead>
                   
                    <th class="v-admin-users-table-head">Name</th>
                    <th class="v-admin-users-table-head">Group</th>
                    <th class="v-admin-users-table-head">Email</th>
                    <th class="v-admin-users-table-head">Root</th>
                    <th class="v-admin-users-table-head">Change</th>
                </thead>
                <tbody class="v-admin-users-table-body">
                    <tr v-for="userTable in usersTable" 
                    :key="userTable.id">
                     
                       <td>{{userTable.name}}</td>
                       <td>{{userTable.group}}</td>
                       <td>{{userTable.email}}</td>
                       <td>{{userTable.role}}</td>
                       <td>
                           <button class="admin-user-button-change"
                               @click="changeUserTable(userTable)">
                               <i class="fas fa-download"/>
                           </button>
                           <button class="admin-user-button-delete"
                                @click="removeUserTable(userTable.id)">
                                <i class="fas fa-trash"/>
                           </button>
                          
                        </td>

                    </tr>
                </tbody>
            </table>
            <span class="v-span-admin-input" v-if="isChangeUser">
                <div class="v-span-admin-input-block">
                    <form
                      class="v-form-change-user"
                      @submit.prevent>
                        <input  type="text" v-model="newNameUser" >
                        <input class="v-form-num-group" type="number" v-model="newGroupUser">
                        <input type="text" v-model="newEmailUser">
                        <input class="v-form-role" type="text" v-model="newRoleUser">
                        <input class="v-form-button-submit" type="submit" @click="changeDataUser">
                        <button class="v-form-button-cancel" @click="isChangeUser=!isChangeUser">Отмена</button>
                    </form>
                </div>
                
            </span>
            <span class="v-span-admin" v-if="isConfirmUserRemove">
            <v-confirm @pressedCancel="isConfirmUserRemove=!isConfirmUserRemove"
                       @pressedOK="removeDataUser">
                       Вы уверены?
            </v-confirm>
             </span>
            <br/>
            <v-button class="v-admin-users-add" textButton="Add" @click="addUser"/>
             <span class="v-span-admin-input" v-if="isAddUser">
                <div class="v-span-admin-input-block">
                    <form
                      class="v-form-change-user"
                      @submit.prevent>
                        <input  type="text" v-model="newNameUser" >
                        <input class="v-form-num-group" type="number" v-model="newGroupUser">
                        <input type="text" v-model="newEmailUser">
                        <input class="v-form-role" type="text" v-model="newRoleUser">
                        <input class="v-form-button-submit" type="submit" @click="addDataUser">
                        <button class="v-form-button-cancel" @click="isAddUser=!isAddUser">Отмена</button>
                    </form>
                </div>
                
            </span>
            
        </div><!-- End Users  -->
      </div><!--   End v-admin-backend  -->  
        <span class="v-span-admin" v-if="isConfirmAdmin">
            <v-confirm @pressedCancel="isConfirmAdmin=!isConfirmAdmin"
                       @pressedOK="changeGroups">
                       Вы уверены?
            </v-confirm>
        </span>
        <span class="v-span-admin" v-if="isConfirmAdminChange">
            <v-confirm @pressedCancel="isConfirmAdminChange=!isConfirmAdminChange"
                       @pressedOK="isConfirmAdminChange=!isConfirmAdminChange">
                       Количество групп и количество имен групп не совпадает!!!
            </v-confirm>
        </span>
        
       
     </div> <!--v-admin -->
</template>

<script setup>
import VButton from './v-button.vue'
import vConfirm from './v-confirm.vue'
import {ref, computed} from 'vue'
import {analytics} from '../modules/initFB.js'
import {useStore} from 'vuex'
import VConfirm from './v-confirm.vue'
const isConfirmAdmin=ref(false)
const isConfirmAdminChange=ref(false)

const store=useStore()

const totalGroups=computed(()=>store.getters.GET_TOTAL_GROUPS)
const nameGroups=computed(()=>store.getters.GET_NAME_GROUPS)
const newTotalGroups=ref(0)
const newNameGroups=ref('')


console.log(analytics)

const changeGroups=()=>{
    let arr=newNameGroups.value.split(",")
    console.log("arr=", arr)
    if (newTotalGroups.value >=2) {
         if(arr.length==newTotalGroups.value) 
         
            store.dispatch('CHANGE_DATA_GROUPS',{groupAll:newTotalGroups.value, nameGroups:arr})
         else isConfirmAdminChange.value=true
    }
    isConfirmAdmin.value=false
}
// users
const usersTable=computed(()=>store.state.usersForAdmin)

let userId=null
const isChangeUser=ref(false)
const newNameUser=ref('')
const newGroupUser=ref(null)
const newEmailUser=ref('')
const newRoleUser=ref('')

const changeUserTable=(event)=>{
    userId=event.id
    newNameUser.value=event.name
    newGroupUser.value=event.group 
    newEmailUser.value=event.email
    newRoleUser.value=event.role

    isChangeUser.value=true
    }
const changeDataUser=()=>{
    let obj={
        id:userId,
        name:newNameUser.value,
        group:newGroupUser.value, 
        email:newEmailUser.value,
        role:newRoleUser.value
    }
    
    isChangeUser.value=false
    store.dispatch('MODI_USER', obj)
}
const isConfirmUserRemove=ref(false)

let removeIdUser=ref('')
const removeUserTable=(event)=>{
    console.log("event=",event)
    removeIdUser.value=event
    isConfirmUserRemove.value=true
}
const removeDataUser=()=>{
     store.dispatch("REMOVE_USER", removeIdUser.value)
     isConfirmUserRemove.value=false
     removeIdUser.value=''
}
const isAddUser=ref(false)
const addUser=()=>{
   
    newNameUser.value=''
    newGroupUser.value=null 
    newEmailUser.value=''
    newRoleUser.value=''

    isAddUser.value=true
}

const addDataUser=()=>{
    let obj={
       
        name:newNameUser.value,
        group:newGroupUser.value, 
        email:newEmailUser.value,
        role:newRoleUser.value
    }
     isAddUser.value=false
     store.dispatch('ADD_USER', obj)
}
// logEvent(analytics, 'notification_received');
</script>

<style>
  .v-admin{
       display: flex;
       flex-direction: column;
       flex-wrap:wrap;
       justify-content:flex-start;
       border: 1px solid lightgray;
       margin-top: 10px;
       padding:10px;
       box-shadow: 0 0 8px 0 darkgray;
  }
  .v-admin-backend{
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      margin:5px;
  }
  .v-admin-groups{
      display: flex;
      flex-direction: column;
      flex-basis:50%;
      font-size:12px;
      padding:10px;
      justify-content:flex-start;
      align-items:flex-start;
      margin: 10px;
     
     
      border: 1px solid lightgray;
  }
  .total-groups-input{
      margin-right: 5px;
  }
  .v-admin-group-button{
      margin-top:5px;
      align-self:flex-end;
      
  }
  .v-admin-input{
      border:1px solid var(--sidebar-bg-color)
  }
  
  .label-admin-backend{
      color:var(--sidebar-bg-color);
      font-size:15px;
      margin-top:1px;
  }
  .label-admin{
      color:lightgrey;
      margin-bottom:5px;
  }
  .v-span-admin{
         position:absolute;
         top:auto; 
         
         left:30%;
         z-index:999999;
    }
  .v-admin-analytics{
      display:flex;
      margin:10px;
      flex-basis:43%;
      border: 1px solid lightgray;
      padding:10px;
  }
  .v-admin-users{
      display:flex;
      flex-direction:column;
      margin:10px;
      flex-basis:100%;
      border: 1px solid lightgray;
      padding:5px;
     
  }
 .v-span-admin-input{
       display: flex;
       flex-direction: column;
       justify-content: center;
        border: 1px solid lightgray;
        /* margin-top: 10px; */
        padding:10px;
        box-shadow: 0 0 8px 0 darkgray;

      border: 1px solid lightgray;
      background: white;
      position:absolute;
      /* top:300px;  */
      left:auto;
      z-index:999999;
 }
 .v-span-admin-input-block{
     display:flex;
      flex-direction: row;
      flex-wrap:wrap;
      border: 1px solid lightgray;
 }
 .v-form-num-group{
     width:30px;
 }
 .v-form-role{
    width:50px;
 }
 .v-form-button-submit{
     background:rgb(253, 166, 66);

 }
 .v-form-button-cancel{
     background:var(--sidebar-bg-color);
     color: white;
 }
 .admin-user-button-change{
     padding:5px;
     margin:2px;
     border:1px solid grey;
     background:var(--sidebar-bg-color);
     color: white;
 }
 .admin-user-button-delete{
     margin:2px;
     padding:5px;
     border:1px solid grey;
     background:red;
     color: white;
 }
 .v-admin-users-add{
     align-self:flex-end;
 }
</style>