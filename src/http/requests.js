import {$host} from "./index";


export const axiosGetCarInfo = async (id) => {
    return await $host.get(`car-in-stock/get-car-by-id?uid=${id}` )
}

export const axiosAllCars = async (data = {
    amount: 15000,
    body: [],
    color: [],
    drive: [],
    engine: {},
    location: [],
    model: {},
    page: 0,
    state: [],
    transmission: [],
    year: []
}) => {
    return await $host.post(`car-in-stock/get-cars`,data )
}
