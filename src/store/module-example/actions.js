import {api} from 'boot/axios'

export const doLogin=async ({commit},payload)=> {
 
    await api.post('/login',payload).then(response=>{

const token=response.data

commit('setToken',token)
api.defaults.headers.common.Authorization = 'Bearer' + token.access

    })    
 
}
export const signOut=({commit})=> {
}
export const getMe=async ({commit,dispatch},token)=>{

}