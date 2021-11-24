import axios from 'axios'
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