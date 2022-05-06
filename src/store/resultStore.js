import {makeAutoObservable} from "mobx";
import {getCars} from "../http/requests";
import FilterStore from './filterStore'


class ResultStore {
    _cars = [];
    _sortState = '';
    _priceFilter = [0,10000000000];

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
                return carsASC
            case 'desc':
                let carsDESC = [...this._cars].sort((a, b) => b.price - a.price)
                return carsDESC
            default:
                return this._cars.filter(item=>+item.price >= +this._priceFilter[0] && +item.price <= +this._priceFilter[1])
        }
    }

    setSortState(value) {
        this._sortState = value
    }

    get SortState() {
        return this._sortState
    }

    setPriceFilter(data){
        this._priceFilter = data
    }
}

export default new ResultStore()