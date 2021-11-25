import { createStore } from "vuex"
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const state={
    activePage:1,
    paginator:[],
    groups:7,
    groupsData:[1,2,3,4,5,6,7],
    s3:[],
    s88:[],
    averageS3WD:[],
    averageS3WE:[],
    isButtonSendS3:true
    
}

export default createStore({
    state,
    getters,
    actions,
    mutations
    
  })