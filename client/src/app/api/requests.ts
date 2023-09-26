import axios, { AxiosResponse } from "axios";
import { Pizza } from "../models/Pizza";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Order = {
    postOrder: (pizza: Pizza) => requests.post(`Order`, pizza),
    getOrderCost: () => requests.get("Order/totalCost")
}

const Report = {
    fetchOrder: () => requests.get("Order")
}



const api = {
    Order,
    Report
}

export default api