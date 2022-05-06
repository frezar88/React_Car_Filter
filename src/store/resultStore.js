import {makeAutoObservable} from "mobx";
import {getCars} from "../http/requests";
import FilterStore from './filterStore'


class ResultStore {
    _cars = [];
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
           brand.add({category:el.brand})
        })
        return brand
    }
}

export default new ResultStore()