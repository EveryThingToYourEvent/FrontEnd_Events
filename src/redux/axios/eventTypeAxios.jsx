import axios from "axios"
const baseUrl = 'https://localhost:44348/api/EventType/'
export const getAllEventType=()=>{
    return axios.get(`${baseUrl}GetAllEventType`)
}
export const deleteEventType = (eventTypeCode) => {
    return axios.delete(`${baseUrl}DeleteEventType/${eventTypeCode}`)
}
export const addEventType = (newEventType) => {
    return axios.post(`${baseUrl}AddNewEventType`, newEventType )
}