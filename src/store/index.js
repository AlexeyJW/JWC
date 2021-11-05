import { createStore } from "vuex"
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const state={
    activePage:1,
    paginator:[]
}

export default createStore({
    state,
    getters,
    actions,
    mutations
    
  })