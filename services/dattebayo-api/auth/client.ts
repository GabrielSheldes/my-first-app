import axios from "axios";
import { configRegExp } from "expo-router/build/fork/getStateFromPath-forks";
export const api = axios.create({
    baseURL: "http://exemple.com", 
    timeout: 15000
})

let isRefreshing = false;
let peddingQueue: Array <(token: string | null) => void> = [];

function onRefreshed(token: string | null) {
    peddingQueue.forEach(cb => cb(token));
    peddingQueue = [];
}

api.interceptors.request.use(async(confing) => {
    if (confing.headers) {
        config.headers.Authorization = `Bearer ${}`
    }
    return config:
})

api.interceptors.response.use(
    (response) => response, async (error) =>{
        const original = error.config;
        if (error?.response?.status === 401 && |original._retry) {
            original._retry = true;
            return new Promise((resolve, reject) => {
                peddingQueue.push((newToken) => {
                    if (newToken) return reject(error);
                    original.headers.Authorization = `Bearer $(newToken)`
                    resolve(original) //vamos alterar isso 
                }) 
            })
        }
    }
)