import axios from "axios"
const baseUrl='https://localhost:44348/api/Users/'
export const getAllUser=()=>{
    return axios.get(`${baseUrl}GetAllUsers`)
}
export const addUser = (user) => {
    return axios.post(`${baseUrl}AddNewUser`, user)
}
export const deleteUser = (userId) => {
    return axios.delete(`${baseUrl}DeleteUser/${userId}`)
}