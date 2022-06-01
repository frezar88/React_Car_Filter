import {$host} from "./index";


export const axiosGetCarInfo = async (id) => {
    return await $host.get(`car-in-stock/get-car-by-id?id=${id}` )
}
