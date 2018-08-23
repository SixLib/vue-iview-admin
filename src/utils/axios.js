import Axios from 'axios'
const axios = Axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

export default axios