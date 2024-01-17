import axios from "axios"
const baseUrl ='https://localhost:44348/api/EventTypeAndProvCategoty/'
export const getAllETandPC = () => {
    return axios.get(`${baseUrl}GetAllEventTypeAndProvCategoty`)
}
export const addETandPC = (ETandPC) => {
    return axios.post(`${baseUrl}AddNewEventToProvider`, ETandPC)
}