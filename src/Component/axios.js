import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-mongo-backends.herokuapp.com"
})

export default instance;