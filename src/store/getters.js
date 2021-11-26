export const GET_ACTIVE_PAGE=state=>state.activePage
export const PAGINATOR=state=>page=>state.paginator[page]
export const ACTIVE_PAGE=state=>state.activePage
export const TOTAL_GROUPS =state=>state.groups
export const NUMBER_GROUPS=state=>state.groupsData
//  table s3
export const GET_S3=(state)=>(year, month)=>{
       let arr= state.s3.filter((el)=>el.year==year)
       return arr.filter((el)=>el.month==month)
}
// filters for table s3

export const FILTER_GROUP=(state, getters)=>(group, year, month)=>{
       console.log('filter_group')
       let arr=getters.GET_S3(year, month)
       console.log(arr.filter((el)=>el.group==group))
       return arr.filter((el)=>el.group==group)
}
export const FILTER_ALL_GROUPS=(state, getters)=>(year, month)=>{
       
       let arr=getters.GET_S3(year, month)
      
       let sum=0
      
       arr.forEach((el)=>sum+=el.total)
       return sum 

}
export const All_REPORTS =(state, getters)=>(year, month)=>{
       let arr=getters.GET_S3(year, month)
       
}
//s-88
export const YEAR_SERVICE=(state)=>(yearService)=> {
       let arr=state.s88.filter((el)=>el.yearService==yearService)
       return arr
}
export const SET_S88=(state, getters)=>(yearService)=>{
       
}
export const GET_AVERAGE_S3_WD=(state)=>state.averageS3WD
export const GET_AVERAGE_S3_WE=(state)=>state.averageS3WE