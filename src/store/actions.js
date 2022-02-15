// import axios from 'axios'
import { db, resOut} from '../modules/initFB.js'
import {collection, onSnapshot, query, where, addDoc, doc, getDocs, getDoc, updateDoc, deleteDoc} from 'firebase/firestore'
// import {isCorrectYearAndMonth, isServiceYear} from '../modules/convertMonth'

// listeners
var unsubscribeS3=null
var unsubscribeS88=null
var unsubscribeAllGroups=null
var unsubscribeUsers=null
var unsubscribeS88N=null
//_______________________________________

// export const GET_S88=({commit})=>{
//     axios.get('../src/assets/s88.json')
//     .then(res=>{
//         // console.log(res.data)
//         commit('SET_S88',res.data)
//     })
// }
// export const GET_S3 =({commit})=>{
//     axios.get('../src/assets/s3.json')
//     .then(res=>commit('SET_S3', res.data))
// }

// export async function FB_GET_S88({commit}){
//  let arr= await s88Snap()
//  console.log ('FB_GET_S88')
//  console.log(arr)
//  commit('SET_S88', arr)
// }

//_______________firebase/firestore_________________________________________
//
//
// listen for s88___________________________________________________________
export function LISTEN_S88 ({commit}){
            const q=query(collection(db, "s88"))
            unsubscribeS88=onSnapshot(q, snapshot=>{
                snapshot.docChanges().forEach(change=>{
                if (change.type==="added"){
                    // console.log("Add", change.doc.data())
                    commit('SET_S88_EL', change.doc.data())
                }
                if (change.type==="modified"){
                    // console.log("Modified",change.doc.id, change.doc.data())
                    commit('MODI_S88', change.doc.data())
                  
                }
                if (change.type==="removed"){
                    // console.log("Removed", change.doc.data())
                    commit ('REMOVE_S88', {yearService:change.doc.data().yearService, month:change.doc.data().month})
                }
                })
        })
}
// add to base collection s88_________________________________________
export async function ADD_S88(ctx, obj){
    console.log("action ADD_S88")
    // console.log("obj=", obj)
            try {
                const docRef = await addDoc(collection(db, "s88"), obj)
            
                // console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
}

//modified to base collection s88______________________________________
export async function MODI_S88 (ctx, obj){
    // console.log("action MODI", obj.month)
    const q=query(collection (db, "s88"),where('month','==',obj.month), where('yearService', '==', obj.yearService))
    const qSnapshot=await getDocs(q)
    qSnapshot.forEach(qdoc=>{
        console.log(qdoc.id)
        updateDoc(doc(db, 's88',qdoc.id), obj)
        .then(()=>console.log('Success'))
        .catch(()=>console.log('error'))
    })
}
//remove a document in the collection s88_______________________________
//...
//average S88___________________________________________________________
export async function AVERAGE_S88 ({commit}, yearService){
    // console.log("action AVERAGE_S88")
    let averageWD=0
    let averageWE=0
    let i=0
    const q=query(collection (db, "s88"), where('yearService', '==', yearService))
    const qSnapshot=await getDocs(q)
    qSnapshot.forEach(qdoc=>{
    //   console.log("qdoc=",qdoc.data())
      averageWD+=qdoc.data().averageWD
      averageWE+=qdoc.data().averageWE
      i++
     })
    // console.log("averageS88=",averageWD, averageWE)
    if(i>0){
        commit('SET_AVERAGE_S88_WD', averageWD/i)
        commit('SET_AVERAGE_S88_WE', averageWE/i)
    } else{
        commit('SET_AVERAGE_S88_WD', averageWD)
        commit('SET_AVERAGE_S88_WE', averageWE)
    }
}
//-------------End s-88-General--------------------
// ------------s-88-Novonikolaevka------------------
export function LISTEN_S88_N ({commit}){
    const q=query(collection(db, "s88n"))
    unsubscribeS88N=onSnapshot(q, snapshot=>{
        snapshot.docChanges().forEach(change=>{
        if (change.type==="added"){
            // console.log("Add", change.doc.data())
            commit('SET_S88_N_EL', change.doc.data())
        }
        if (change.type==="modified"){
            // console.log("Modified",change.doc.id, change.doc.data())
            commit('MODI_S88_N', change.doc.data())
          
        }
        if (change.type==="removed"){
            // console.log("Removed", change.doc.data())
            commit ('REMOVE_S88_N', {yearService:change.doc.data().yearService, month:change.doc.data().month})
        }
        })
})
}
// add to base collection s88_________________________________________
export async function ADD_S88_N(ctx, obj){
console.log("action ADD_S88_N")
// console.log("obj=", obj)
    try {
        const docRef = await addDoc(collection(db, "s88n"), obj)
    
        // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//modified to base collection s88______________________________________
export async function MODI_S88_N (ctx, obj){
// console.log("action MODI", obj.month)
const q=query(collection (db, "s88n"),where('month','==',obj.month), where('yearService', '==', obj.yearService))
const qSnapshot=await getDocs(q)
qSnapshot.forEach(qdoc=>{
console.log(qdoc.id)
updateDoc(doc(db, 's88n',qdoc.id), obj)
.then(()=>console.log('Success'))
.catch(()=>console.log('error'))
})
}
//remove a document in the collection s88_______________________________
//...
//average S88___________________________________________________________
export async function AVERAGE_S88_N ({commit}, yearService){
// console.log("action AVERAGE_S88_N")
let averageWD=0
let averageWE=0
let i=0
const q=query(collection (db, "s88n"), where('yearService', '==', yearService))
const qSnapshot=await getDocs(q)
qSnapshot.forEach(qdoc=>{
//   console.log("qdoc=",qdoc.data())
averageWD+=qdoc.data().averageWD
averageWE+=qdoc.data().averageWE
i++
})
// console.log("averageS88=",averageWD, averageWE)
if(i>0){
commit('SET_AVERAGE_S88_N_WD', averageWD/i)
commit('SET_AVERAGE_S88_N_WE', averageWE/i)
} else{
commit('SET_AVERAGE_S88_N_WD', averageWD)
commit('SET_AVERAGE_S88_N_WE', averageWE)
}
}
//----------End s-88- Novonikolaevka----------------
// listen base collection s3____________________________________________
export function LISTEN_S3 ({commit}){
        const dateNow=new Date()
        const monthNow=dateNow.getMonth()
        const yearNow=dateNow.getFullYear()
        // const serviceYear=isServiceYear(yearNow, monthNow)


        const dataBefore=()=>{
            let o={
                year:null,
                month:null,
                serviceYear:null
            }
            if (monthNow==0)
             {
                o.month=11
                o.year=yearNow-1
                // o.serviceYear=isServiceYear(o.year, o.month)
         
            }else {
                o.month=monthNow-1
                o.year=yearNow
                // o.serviceYear=isServiceYear(o.year, o.month)
            }
         return o

        }

        let oBefore=dataBefore()
        console.log("oBefore=", oBefore)
        const q=query(collection(db, "s3"))
        unsubscribeS3=onSnapshot(q, snapshot=>{
            snapshot.docChanges().forEach(change=>{
            if (change.type==="added"){
                // console.log("Add", change.doc.data())
                if (Number(change.doc.data().year)==Number(yearNow)|| (Number(change.doc.data().year)==Number(oBefore.year)))
                  if(change.doc.data().month==monthNow || change.doc.data().month==oBefore.month)
                     commit('SET_S3_EL', {id:change.doc.id, data:change.doc.data()})
            }
            if (change.type==="modified"){
                // console.log("Modified",change.doc.id, change.doc.data())
                if (Number(change.doc.data().year)==Number(yearNow)|| (Number(change.doc.data().year)==Number(oBefore.year)))
                  if(change.doc.data().month==monthNow || change.doc.data().month==oBefore.month)
                     commit('MODI_S3',{id:change.doc.id, obj:change.doc.data()})
            }
            if (change.type==="removed"){
                // console.log("Removed", change.doc.data())
                if (Number(change.doc.data().year)==Number(yearNow)|| (Number(change.doc.data().year)==Number(oBefore.year)))
                  if(change.doc.data().month==monthNow || change.doc.data().month==oBefore.month)
                         commit('REMOVE_S3', change.doc.id)
            }
            })
    })
}
//request data s-3 for admin 
export async function REQUEST_S3({commit}, obj){
    // console.log("send obj=", obj)
    const arr=[]
  
    const q=query(collection (db, "s3"), where('group', '==', obj.group), where('month','==', obj.month), where('yearService', '==', obj.serviceYear))
    
    
    const qSnapshot=await getDocs(q)
    qSnapshot.forEach(qdoc=>{
                // console.log("qdoc id=", qdoc.id)
                arr.push({id:qdoc.id, data:qdoc.data()})
            })
    // console.log("arr=", arr)
    return arr


}
//add a document to the collection s3__________________________________
export async function ADD_S3(ctx, obj){
    console.log("action ADD_S3")
    // console.log("obj=", obj)
            try {
                const docRef = await addDoc(collection(db, "s3"), obj)
            
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
}
//modify a document in the collection s3_______________________________
export async function MODI_S3 (ctx, {id:id, obj:obj}){
   
        updateDoc(doc(db, 's3', id), obj)
        .then(()=>console.log('Success'))
        .catch(()=>console.log('error'))
    // })
}
//remove a document in the collection s3_______________________________
export async function DEL_S3({commit}, id){
    await deleteDoc(doc(db, "s3", id))
} 
export async function CLEAN_S3({commit}, obj){
    let arrId=[]
    const q=query(collection (db, "s3"), where('month','==', obj.month), where('yearService', '==', obj.serviceYear))
    const qSnapshot=await getDocs(q)
    qSnapshot.forEach(qdoc=>{
        arrId.push(qdoc.id)
    })
    if (arrId.length>0)
       arrId.forEach(id=>deleteDoc(doc(db, "s3", id)))
}
//________User________________________
export async function GET_GROUP_USER({commit}, email){
    const q=query(collection (db, "users"), where('email', '==', email))
    try{
    const qSnapshot=await getDocs(q)
    qSnapshot.forEach(qdoc=>{
    //   console.log("qdoc=",qdoc.data())
      commit('SET_VUSER',{name:qdoc.data().name, email:qdoc.data().email, group:qdoc.data().group, role:qdoc.data().role})
     })
     return 'ok'
    }catch(err){
        console.log("ERROR!!!!!! "+err.code)
        return err.code
    }
}

export function GET_TOTAL_GROUPS({commit}){
    const q=query(collection(db, "groupAll"))
    unsubscribeAllGroups=onSnapshot(q, snapshot=>{
        snapshot.docChanges().forEach(change=>{
        if (change.type==="added"){
            // console.log("Add", change.doc.data())
            commit('SET_TOTAL_GROUPS', change.doc.data().groupAll)
            commit('SET_NAME_GROUPS', change.doc.data().nameGroups)
        }
        if (change.type==="modified"){
            // console.log("Modified",change.doc.id, change.doc.data().groupAll)
            commit('SET_TOTAL_GROUPS', change.doc.data())
            commit('SET_NAME_GROUPS', change.doc.data().nameGroups)
        }
        if (change.type==="removed"){
            // console.log("Removed", change.doc.data())
           
        }
        })
})
}
export function CHANGE_DATA_GROUPS ({commit}, {groupAll, nameGroups}){
    console.log("action change")
    updateDoc(doc(db, 'groupAll', "ZuNYyo1fBGPEhFAW3VLU"), {groupAll:groupAll, nameGroups:nameGroups})
    .then(()=>console.log('Success'))
    .catch(()=>console.log('error'))
}

export function LISTEN_USERS_FOR_ADMIN ({commit}){
    const q=query(collection(db, "users"))
    unsubscribeUsers=onSnapshot(q, snapshot=>{
        snapshot.docChanges().forEach(change=>{
        if (change.type==="added"){
            // console.log("Add", change.doc.data())
            commit('SET_USERS_FOR_ADMIN',
             {id:change.doc.id,
             name:change.doc.data().name,
             group:change.doc.data().group,
             email:change.doc.data().email,
             role:change.doc.data().role
             })
        }
        if (change.type==="modified"){
            // console.log("Modified",change.doc.id, change.doc.data())
            commit('MODI_USER_ADMIN',
               {id:change.doc.id,
                name:change.doc.data().name,
                group:change.doc.data().group,
                email:change.doc.data().email,
                role:change.doc.data().role
               })
        }
        if (change.type==="removed"){
            // console.log("Removed", change.doc.data())
            commit('REMOVE_USER_ADMIN', change.doc.id)
        }
        })
})
}
//add a document to the collection s3__________________________________
export async function ADD_USER(ctx, obj){

        try {
            const docRef = await addDoc(collection(db, "users"), obj)
        
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
}
//modify a document in the collection users _____________________________
export async function MODI_USER (ctx, obj){
console.log("action MODI", obj.id)
    updateDoc(doc(db, 'users', obj.id),
     {name:obj.name,
      group:obj.group,
      email:obj.email,
      role:obj.role})
    .then(()=>console.log('Success'))
    .catch(()=>console.log('error'))
}
export async function REMOVE_USER (ctx, id){
    // console.log("id=", id)
    await deleteDoc(doc(db, "users", id));
}
   

export function UNSUBSCRIBE({commit}){
    console.log('unsubscribe')
    unsubscribeS3()
    unsubscribeS88()
    unsubscribeAllGroups()
    unsubscribeUsers()
    unsubscribeS88N()
    commit('SET_IS_AUTH')
    commit('DESTROY_STATE')
    const r=resOut()
    // console.log(r)
}
