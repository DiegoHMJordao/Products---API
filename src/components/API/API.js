import axios from 'axios'

//Below is the URL request. If is needed exchange we just update this variable
//const BASE = "https://dummyjson.com/products"

export const instance = axios.create({
    baseURL: "https://dummyjson.com/products"
})

export const api = async () => {
    let response = await instance.get()
    return response.data
   
}