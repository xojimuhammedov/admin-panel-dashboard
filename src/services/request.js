import axios from "axios";
import storage from "./storage";
import config from "../config";

const request = axios.create({
    headers: {
        "Content-Type": 'application/json'
    },
    baseURL: config.API_URL,
    params: {}
})

request.interceptors.request.use(
    (config) => {
        const token = storage.get("userToken")
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const statusCode = error.response
        if (statusCode === 401) {
            window.localStorage.clear()
        }
        return Promise.reject(error)
    }
)

export { request }