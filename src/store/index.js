import { createStore } from "vuex"
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const state={
    activePage:1,
    paginator:[],
    groups:2,
    groupsData:[6,7],
    s3:[],
    s88:[],
    averageS3WD:[],
    averageS3WE:[],
    averageS88WD:0,
    averageS88WE:0,
    isButtonSendS3:true,
    isAuth:true,
    vUser:'',
    vUserEmail:'',
    vUserGroup:''
    
}

export default createStore({
    state,
    getters,
    actions,
    mutations
    
  })