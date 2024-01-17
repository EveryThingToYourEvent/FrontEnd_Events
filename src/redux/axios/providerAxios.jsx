import axios from "axios"
const baseUrl = 'https://localhost:44348/api/Provider/'
export const getAllProvider = () => {
    return axios.get(`${baseUrl}GetAllProviders`)
}
export const getAllProviderConfirm = () => {
    return axios.get(`${baseUrl}GetAllProvidersConfirm`)
}
export const getAllProviderNotConfirm=()=>{
    return axios.get(`${baseUrl}GetAllProviderNotConfirm`)
}
export const getProviderByCode = (provCode) => {
    return axios.get(`${baseUrl}GetProviderByCode/${provCode}`)
}
export const addProvider=(newProvider)=>{
    return axios.post(`${baseUrl}AddNewProvider`,newProvider)
}
export const deleteProvider=(provCode) => {
    return axios.delete(`${baseUrl}DeleteProvider/${provCode}`)
}
export const updateProviders=(id,upProvider)=>{
    return axios.put(`${baseUrl}UpdateProvider/${id}`,upProvider)
}
export const updatePCcode=(provCode, PCcode)=>{
    return axios.get(`${baseUrl}UpdatePCcode/${provCode}/${PCcode}`)
}