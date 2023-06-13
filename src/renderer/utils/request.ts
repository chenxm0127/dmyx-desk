import axios from 'axios'

const baseUrl = 'http://101.132.105.74:3000/api/'
//const baseUrl = 'http://localhost:3000/api/'
const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    'access-token': '12345678901234567890',
    'content-type': 'application/json;charset=utf-8'
  }
})

export default apiClient