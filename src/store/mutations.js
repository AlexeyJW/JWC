export default{
    SET_PAGINATOR (state, o){
        state.paginator.push(o)
    },

    SET_FALSE(state){
        state.paginator.forEach(e => {
            e.isActive=false
        })
    },

    SET_IS_ACTIVE (state, o){
           
        state.paginator[o.index].isActive=o.newIsActive
    },

    SET_ACTIVE_PAGE (state, page){
        state.activePage=page
    },
    ADD_S3 (state, o){
        state.s3.push(o)
    },
    SET_S3 (state, arr){
        state.s3=[...arr]
    },
    SET_S88 (state, arr){
        arr.forEach(el=>state.s88.push(el))
        

    }
    
}