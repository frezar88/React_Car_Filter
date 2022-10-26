import axios from "axios";



const $host = axios.create({
    baseURL:'https://stock.lada.by/'
    // baseURL:''

})



export {
    $host,
}