import Axios from 'axios'

const url = process.env.URL || 'http://localhost:3001'
const axios = Axios.create({
    baseURL: url
})

export default axios