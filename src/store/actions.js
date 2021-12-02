import axios from 'axios'
import {s88Snap, db} from '../modules/initFB.js'
import {collection, onSnapshot, query, where, addDoc, doc, getDocs, getDoc, updateDoc} from 'firebase/firestore'
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

export async function FB_GET_S88({commit}){
 let arr= await s88Snap()
 console.log ('FB_GET_S88')
 console.log(arr)
 commit('SET_S88', arr)
}

//_______________firebase/firestore________________
// listen for s88
export function LISTEN_S88 ({commit}){
            const q=query(collection(db, "s88"))
            const unsubscribe=onSnapshot(q, snapshot=>{
                snapshot.docChanges().forEach(change=>{
                if (change.type==="added"){
                    console.log("Add", change.doc.data())
                    commit('SET_S88_EL', change.doc.data())
                }
                if (change.type==="modified"){
                    console.log("Modified",change.doc.id, change.doc.data())
                }
                if (change.type==="removed"){
                    console.log("Removed", change.doc.data())
                }
                })
        })
}
// add to base collection s88
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
//modified to base collection s88
export async function MODI_S88 (ctx, obj){
    console.log("action MODI", obj.month)
    const q=query(collection (db, "s88"),where('month','==',obj.month))
    const qSnapshot=await getDocs(q)
    qSnapshot.forEach(qdoc=>{
        console.log(qdoc.id)
        updateDoc(doc(db, 's88',qdoc.id), obj)
        .then(()=>console.log('Success'))
        .catch(()=>console.log('error'))
    })

    
}
// listen base collection s3
export function LISTEN_S3 ({commit}){
        const q=query(collection(db, "s3"))
        const unsubscribe=onSnapshot(q, snapshot=>{
            snapshot.docChanges().forEach(change=>{
            if (change.type==="added"){
                console.log("Add", change.doc.data())
            }
            if (change.type==="modified"){
                console.log("Modified",change.doc.id, change.doc.data())
            }
            if (change.type==="removed"){
                console.log("Removed", change.doc.data())
            }
            })
    })
}