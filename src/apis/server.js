import axios from 'axios'

export default axios.create({
    baseURL: `https://tweettweet8.herokuapp.com/`
})