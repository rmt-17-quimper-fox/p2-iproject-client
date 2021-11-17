import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3000'
    // baseURL: `https://news-portal-hacktiv8.herokuapp.com`
})