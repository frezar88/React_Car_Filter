import axios from "axios";



const $host = axios.create({
    // baseURL:''


    baseURL:'https://stock.aps.by'
})



export {
    $host,
}