import axios from "axios";



const $host = axios.create({
    baseURL:'http://stock.mitsubishi/'
})



export {
    $host,
}