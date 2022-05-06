import {makeAutoObservable} from "mobx";
import {getCars} from "../http/requests";
import FilterStore from './filterStore'


class ResultStore {
    _cars = [{
        body: "кроссовер",
        body_id: "2",
        brand: "Mitsubishi",
        brand_id: "4",
        car_id: "4654",
        color: "чёрный",
        color_id: "3",
        complectation: "SE Tech",
        drive_type_id: "полный (4WD)",
        engine: "2",
        engine_id: "102",
        fueltype: "Бензиновый",
        image: "/images/mitsubishi/000001986/ga_x42.png",
        instock: "1",
        location: "Могилёв, пр-т Шмидта, 1а",
        location_id: "41",
        model: "ASX",
        model_id: "56",
        options_packets: "PM",
        power: "150",
        price: "117300",
        'price-2': "117300",
        'price-rus': "3308000",
        reserved: "0",
        'seat-count': "5",
        stockstatus_id: "1",
        transmission_id: "1",
        transmission_name: "CVT",
        transmission_shiftcount: "0",
        transmission_type: "Автоматическая",
        version_id: "458",
        vin: "JMBXTGA2WNU000384",
        volume: "2",
        years: "2021",
    }];
    _sortState = ''

    constructor() {
        makeAutoObservable(this)
    }

    getStartedCars() {
        getCars(FilterStore.FiltersData).then((data) => {
                this._cars = [...data.data['cars']]
            }
        )

    }

    get CarsList() {
        switch (this._sortState) {
            case 'asc':
                let carsASC = [...this._cars].sort((a, b) => a.price - b.price)
                    .filter(item => item.price >= FilterStore.CarPrice[0] && item.price <= FilterStore.CarPrice[1])
                return carsASC
            case 'desc':
                let carsDESC = [...this._cars].sort((a, b) => b.price - a.price)
                    .filter(item => item.price >= FilterStore.CarPrice[0] && item.price <= FilterStore.CarPrice[1])
                return carsDESC
            default:
                return this._cars.filter(item => item.price >= FilterStore.CarPrice[0] && item.price <= FilterStore.CarPrice[1])
        }
    }

    setSortState(value) {
        this._sortState = value
    }

    get SortState() {
        return this._sortState
    }

    get BrandCarList(){
        let brand = new Set()
        this._cars.forEach(el=>{
           brand.add(el.brand)
        })
        return brand
    }
}

export default new ResultStore()