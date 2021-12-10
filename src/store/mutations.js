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
    DEL_S88 (state){
        console.log('DEL_S88')
        state.s88=[]
    },
    DEL_S3 (state){
        console.log('DEL_S3')
        state.s83=[]
    },

    SET_S88 (state, arr){
        console.log('Set_S88')
        arr.forEach(el=>state.s88.push(el))
    },
    SET_S88_EL(state, el){
        state.s88.push(el)
    },
    //
    SET_S3_EL(state, el){
        state.s3.push(el)
    },
    MODI_S3 (state, {id:id, obj:obj}){
        console.log('MODI_S3')
        const index=state.s3.findIndex(el=>el.id==id)
        console.log("state.s3["+index+"]=", state.s3)
        state.s3[index].data=obj
    },
    MODI_S88 (state, obj){
        console.log('MODI_S88')
        // need add compare year
        const index=state.s88.findIndex(el=>el.month==obj.month && el.yearService==obj.yearService)
        console.log("state.s88["+index+"]=", state.s88)
        state.s88[index]=obj
    },
    REMOVE_S88 (state, obj){
        console.log('REMOVE_S88')
        const index=state.s88.findIndex(el=>el.month==obj.month && el.yearService==obj.yearService)
        state.s88.splice(index, 1)
    },
    REMOVE_S3 (state, id){
        console.log('REMOVE_S3')
        const index=state.s3.findIndex(el=>el.id==id)
        state.s3[index].splice(index, 1)
    },
    SET_AVERAGE_S3_WD (state, o){
        console.log(o)
        state.averageS3WD.push(o)
    },
    SET_AVERAGE_S3_WE (state,o){
        console.log(o)
        state.averageS3WE.push(o)
    },
    SET_AVERAGE_S88_WD (state, el){
        
        state.averageS88WD=el
    },
    SET_AVERAGE_S88_WE (state, el){
        state.averageS88WE=el
    },
    SET_IS_BUTTON_SEND_S3_FALSE(state){
        state.isButtonSendS3=false
    },
    SET_IS_BUTTON_SEND_S3_TRUE(state){
        state.isButtonSendS3=true
    },
    SET_IS_AUTH (state){
        state.isAuth=!state.isAuth
    },
    SET_VUSER (state, {name:user, email:email, group:group}){
        state.vUser=user
        state.vUserEmail=email
        state.vUserGroup=group
    },
    DESTROY_STATE (state){
        console.log('DESTROY_STATE')
        state.s3=[]
        state.s88=[]
        state.averageS3WD=[]
        state.averageS3WE=[]
        state.averageS88WD=0
        state.averageS88WE=0
        state.vUser=''
        state.vUserEmail=''
        state.vUserGroup=''
    },
    SET_USER_PHOTO (state, url){
        console.log('set_user_photo', url)
        state.vUserPhoto=url
    },
    SET_TOTAL_GROUPS(state, total){
        state.groups=total
        //требуется доработка
        for(let i=0;i<total; i++) state.groupsData.push(i+1)
    }
    
}