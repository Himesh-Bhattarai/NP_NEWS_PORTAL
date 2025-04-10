// src/utils/axiosInstance.ts
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api", // ⛳ Change this to your backend's base URL
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default axiosInstance
