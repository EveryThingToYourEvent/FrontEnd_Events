import axios from "axios"
const baseUrl = 'https://localhost:44348/api/OpinionToProvider/'

export const getAllOpinionToProviders = () => {
    return axios.get(`${baseUrl}GetAllOpinionToProvider`)
}

export const getOpinionToProviderByProvId = (provCode) => {
    return axios.get(`${baseUrl}GetOpinionToProviderByProvCode/${provCode}`)
}

export const addOpinionToProvider = (opinion) => {
    debugger
    return axios.post(`${baseUrl}AddNewOpinionToProvider`, opinion)
}
