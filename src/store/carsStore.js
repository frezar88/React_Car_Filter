import {makeAutoObservable} from "mobx";
import {axiosGetCars} from "../http/requests";


class CarsStore {
    _cars = [];
    _sortState = '';
    _promo = new Set();

    constructor() {
        makeAutoObservable(this)
    }

    setStartedCars() {
        axiosGetCars().then((data) => {
                this.setCars([...data.data['cars']])
            }
        )
    }

    get CarsList() {
        switch (this.getSortState()) {
            case 'asc':
                return [...this.getCats()].sort((a, b) => a.price - b.price)
            case 'desc':
                return [...this.getCats()].sort((a, b) => b.price - a.price)
            default:
                return this.getCats()
        }
    }

    setSortState(data) {
        return this._sortState = data
    }

    getSortState(){
        return this._sortState
    }

    getCats() {
        return this._cars
    }

    setCars(data) {
        return this._cars = data
    }
}

export default new CarsStore()