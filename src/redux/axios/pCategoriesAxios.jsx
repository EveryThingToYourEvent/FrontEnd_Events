import axios from "axios"
const baseUrl = 'https://localhost:44348/api/ProvidersCategories/'
export const getAllProvidersCategories = () => {
    return axios.get(`${baseUrl}GetAllProvidersCategories`)
}
export const addNewProviderCategory=(newPCategory)=>{
    return axios.post(`${baseUrl}AddNewProvidersCategory`,newPCategory)
}
export const deleteProvidersCategory = (pccode) => {
    return axios.delete(`${baseUrl}DeleteProviderCategory/${pccode}`)
}