import axios from "axios"
const baseUrl = 'https://localhost:44348/api/EventToProvider/'
export const getEventsToProviderByID = (id) =>
    axios.get(`${baseUrl}GetEventsToProviderById/${id}`)

export const addEventsToProvider = (obj) => {
    return axios.post(`${baseUrl}AddNewEventToProvider`, obj)
}
export const getEventToProviderIsFreeOrNot = (id) => {
    return axios.get(`${baseUrl}GetEventToProviderIsFreeOrNot/${id}`)
}