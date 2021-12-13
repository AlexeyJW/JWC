import { createStore } from "vuex"
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

import {ref, computed} from 'vue'
export const collapsed=ref(true)
export const toggleSidebar=()=>(collapsed.value=!collapsed.value)
export const SIDEBAR_WIDTH=180
export const SIDEBAR_WIDTH_COLLAPSED=0

export const sidebarWidth=computed(()=>`${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`)


const state={
    activePage:1,
    paginator:[],
    groups:null,
    groupsData:[],
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
    vUserGroup:'',
    vUserPhoto:'',
    vUserRole:''
    
}

export default createStore({
    state,
    getters,
    actions,
    mutations
    
  })
