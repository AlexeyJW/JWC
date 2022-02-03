export const convertMonth=(numberMonth)=>{
    let month=''
    switch (numberMonth){
        case 0:month='Январь'; break;
        case 1:month='Февраль'; break;
        case 2:month='Март'; break;
        case 3:month='Апрель'; break;
        case 4:month='Май'; break;
        case 5:month='Июнь'; break;
        case 6:month='Июль'; break;
        case 7:month='Август'; break;
        case 8:month='Сентябрь'; break;
        case 9:month='Октябрь'; break;
        case 10:month='Ноябрь'; break;
        case 11:month='Декабрь'; break;
                
    }
    return month
       
}
export const isServiceYear=( year, month)=>{
   let serviceYear=null
   if (month<9) {
       serviceYear=year
   }else {
       serviceYear=year+1
   } 
   return serviceYear  
}
export const isCorrectYearAndMonth=(y, m)=>{
    // console.log("is correct Year: y=", y, "m=", m)
    let obj={
             year: y,
             month: m
            }
    if (m==-1) {
        obj.month=11
        obj.year=y-1
    }
    // console.log("obj in correct=", obj)
    return obj    
    
}
export const sundayMonth=( y, m)=>{
    m+=1
    var days = new Date( y,m,0 ).getDate();
          var sundays=[];
          var sundays1 =  (8 - (new Date( m +'/01/'+ y ).getDay())) % 7;
          if(sundays1>0) {
            sundays[0]=sundays1;
            for ( var i = sundays[0] + 7; i <= days; i += 7 ) {
                sundays.push( i );
             }
          }else {
             for ( var i = sundays1 + 7; i <= days; i += 7 ) {
                 sundays.push( i );
              }
          } // end else
          //let elem=document.getElementById("elem");
         // elem.getAttribute('colspan');
       //   elem.setAttribute('colspan',3); 
          return sundays;
}
export const isCorrectMonth=(dateNow)=>{
    
    let correct=0
    let d= dateNow.getDate()
    let i=dateNow.getDay()
    
    if (i==0 && d<7) {
        correct=1
       
    }
    else if(d+(7-i)<7){
         correct=1
        
    }
 
    return correct
}
export const isNumberWeek=(receivedDate)=>{
   dateNow=new Date(receivedDate)
   const sun=sundayMonth(dateNow.getFullYear(), dateNow.getMonth())
   let mon=[]
   
   sun.forEach((el)=>{
       if(el>6) mon.push(el-6)
   })

}
// find dates all mondays
export const mondayMonth=(y,m)=>{
   let days=new Date(y,m+1,0).getDate()//Last day
   let index=new Date(y,m,1).getDay()//index first day month
   let mon=[]
// first monday
   if (index<1) mon.push(2)
   else if(index==1) mon.push(1)
   else if(index>1) mon.push(9-index)
       
// array monday
   for(let i=mon[0]+7;i<=days; i+=7)
      mon.push(i)
       
    return mon
}


  //find week number
export const calcWeekNumber=(y,m,d)=>{
  let mon=mondayMonth(y,m)
  let obj={
       month:null,
       week:null
   }
//if date < first monday
  if(d<mon[0]) {
      let o=isCorrectYearAndMonth(y, m-1)
      mon=mondayMonth(o.year,o.month)
      obj.month=o.month
      obj.week=mon.length
      return obj
// if date = last monday
  }else if (d==mon[0]){
      obj.month=m
      obj.week=1
      return obj
  }else if(d>=mon[mon.length-1]) {
      obj.month=m
      obj.week=mon.length
      return obj
// if date located in between first and last monday
  }else if (d>mon[0]&&d<mon[mon.length-1])
   {
   for (let i=1; i<mon.length; i++)
     {
       if (d>=mon[i-1]&&d<mon[i]) {
           obj.month=m
           obj.week=i
       return obj
        
       }
    }
   }
}