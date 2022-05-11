import {makeAutoObservable} from "mobx";
import {getCars} from "../http/requests";


class ResultStore {
    _cars = [];
    _sortState = '';

    constructor() {
        makeAutoObservable(this)
    }

    setStartedCars() {
        getCars().then((data) => {
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
                return this._cars

        }
    }


}

export default new ResultStore()