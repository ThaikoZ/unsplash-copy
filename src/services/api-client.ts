import axios from "axios";


const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        'Authorization': `Client-ID ${key}`,
    }
})