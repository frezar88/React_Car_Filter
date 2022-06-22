import {$host} from "./index";


export const axiosGetStartedFilter = async (data) => {
    return await $host.post('car-in-stock/react-filters', data)
}

export const axiosGetCars = async (data =
                                  {
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
                                      year: [],
                                      price: []
                                  },) => {
    return await $host.post(`/car-in-stock/get-cars`, data)
}

export const axiosGetCarInfo = async (id) => {
    return await $host.get(`car-in-stock/get-car-by-id?id=${id}` )
}