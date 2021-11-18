import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://binge-buddy-h8.herokuapp.com',

    
})

export default axiosInstance