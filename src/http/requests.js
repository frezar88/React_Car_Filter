import {$host} from "./index";
import FilterStore from "../store/filterStore";


export const axiosGetStartedFilter = async (data) => {
    const response = await $host.post('car-in-stock/react-filters',data)
    return response
}

export const getCars = async (data=FilterStore.FiltersData) => {
    const response = await $host.post(`/car-in-stock/get-cars`, data)
    return response
}