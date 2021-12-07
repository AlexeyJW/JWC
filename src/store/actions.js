import axios from 'axios'
import { db} from '../modules/initFB.js'
import {collection, onSnapshot, query, where, addDoc, doc, getDocs, getDoc, updateDoc} from 'firebase/firestore'

// listeners
var unsubscribeS3=null
var unsubscribeS88=null
//_______________________________________

export const GET_S88=({commit})=>{
    axios.get('../src/assets/s88.json')
    .then(res=>{
        console.log(res.data)
        commit('SET_S88',res.data)
    })
}
export const GET_S3 =({commit})=>{
    axios.get('../src/assets/s3.json')
    .then(res=>commit('SET_S3', res.data))
}

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
                    console.log("Add", change.doc.data())
                    commit('SET_S88_EL', change.doc.data())
                }
                if (change.type==="modified"){
                    console.log("Modified",change.doc.id, change.doc.data())
                    commit('MODI_S88', change.doc.data())
                  
                }
                if (change.type==="removed"){
                    console.log("Removed", change.doc.data())
                    commit ('REMOVE_S88', {yearService:change.doc.data().yearService, month:change.doc.data().month})
                }
                })
        })
}
// add to base collection s88_________________________________________
export async function ADD_S88(ctx, obj){
    console.log("action ADD_S88")
    console.log("obj=", obj)
            try {
                const docRef = await addDoc(collection(db, "s88"), obj)
            
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
}

//modified to base collection s88______________________________________
export async function MODI_S88 (ctx, obj){
    console.log("action MODI", obj.month)
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
    console.log("action AVERAGE_S88")
    let averageWD=0
    let averageWE=0
    const q=query(collection (db, "s88"), where('yearService', '==', yearService))
    const qSnapshot=await getDocs(q)
    qSnapshot.forEach(qdoc=>{
      console.log("qdoc=",qdoc.data())
      averageWD+=Number(qdoc.data().averageWD)
      averageWE+=Number(qdoc.data().averageWE)
     })
    console.log("averageS88=",averageWD, averageWE)
    commit('SET_AVERAGE_S88_WD', averageWD)
    commit('SET_AVERAGE_S88_WE', averageWE)
}
// listen base collection s3____________________________________________
export function LISTEN_S3 ({commit}){
        const q=query(collection(db, "s3"))
        unsubscribeS3=onSnapshot(q, snapshot=>{
            snapshot.docChanges().forEach(change=>{
            if (change.type==="added"){
                console.log("Add", change.doc.data())
                commit('SET_S3_EL', {id:change.doc.id, data:change.doc.data()})
            }
            if (change.type==="modified"){
                console.log("Modified",change.doc.id, change.doc.data())
                commit('MODI_S3',{id:change.doc.id, obj:change.doc.data()})
            }
            if (change.type==="removed"){
                console.log("Removed", change.doc.data())
                commit('REMOVE_S3', change.doc.id)
            }
            })
    })
}
//add a document to the collection s3__________________________________
export async function ADD_S3(ctx, obj){
    console.log("action ADD_S3")
    console.log("obj=", obj)
            try {
                const docRef = await addDoc(collection(db, "s3"), obj)
            
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
}
//modify a document in the collection s3_______________________________
export async function MODI_S3 (ctx, {id:id, obj:obj}){
    console.log("action MODI", obj.month)
    // const q=query(collection (db, "s3"),where('month','==',obj.month))
    // const qSnapshot=await getDocs(q)
    // qSnapshot.forEach(qdoc=>{
        // console.log(qdoc.id)
        
        // updateDoc(doc(db, 's3',qdoc.id), obj)
        updateDoc(doc(db, 's3', id), obj)
        .then(()=>console.log('Success'))
        .catch(()=>console.log('error'))
    // })
}
//remove a document in the collection s3_______________________________
//...
//________User________________________
export async function GET_GROUP_USER({commit}, email){
    const q=query(collection (db, "users"), where('email', '==', email))
    const qSnapshot=await getDocs(q)
    qSnapshot.forEach(qdoc=>{
      console.log("qdoc=",qdoc.data())
      commit('SET_VUSER',{name:qdoc.data().name, email:qdoc.data().email, group:qdoc.data().group})
     })
}
export function UNSUBSCRIBE(ctx){
    console.log('unsubscribe')
    unsubscribeS3()
    unsubscribeS88()
}
