import {makeAutoObservable} from "mobx";
import {getCars} from "../http/requests";
import FilterStore from './filterStore'


class ResultStore {
    _cars = [];
    _sortState = '';
    _priceFilter = [0, 10000000000];
    _promo = new Set();
    _activePromo = []
    _countPromo={}
    _hiddenPromo= new Set()

    constructor() {
        makeAutoObservable(this)
    }

    getStartedCars() {
        getCars(FilterStore.FiltersData).then((data) => {
                if (!this._promo.size) {
                    data.data['cars'].forEach(({promo}) => {
                        if (promo[0]) {
                            promo.forEach(el => {
                                this._promo.add(el['promo_name'])
                                if (this._countPromo[el['promo_name']] || this._countPromo[el['promo_name']]===0){
                                    this._countPromo[el['promo_name']]+=1
                                }else{
                                    this._countPromo[el['promo_name']]=0
                                }
                            })
                        }
                    })
                }else{
                    this._hiddenPromo.clear()
                    data.data['cars'].forEach(({promo}) => {
                        if (promo[0]) {
                            promo.forEach(el => {
                                this._promo.add(el['promo_name'])
                                this._hiddenPromo.add(el['promo_name'])
                            })
                        }
                    })
                    if(!this._hiddenPromo.size){
                        this._hiddenPromo.add('clear')
                    }
                }
                console.log(this._hiddenPromo)
                this._cars = [...data.data['cars']]
            }
        )
    }

    get CarsList() {
        if (!this._activePromo.length) {
            switch (this._sortState) {
                case 'asc':
                    let carsASC = [...this._cars].sort((a, b) => a.price - b.price)
                    return carsASC
                case 'desc':
                    let carsDESC = [...this._cars].sort((a, b) => b.price - a.price)
                    return carsDESC
                default:
                    return this._cars.filter(item => +item.price >= +this._priceFilter[0] && +item.price <= +this._priceFilter[1])
                        .filter(item => item)
            }
        } else {
            switch (this._sortState) {
                case 'asc':
                    let carsASC = [...this._cars].sort((a, b) => a.price - b.price)
                    return carsASC
                case 'desc':
                    let carsDESC = [...this._cars].sort((a, b) => b.price - a.price)
                    return carsDESC
                default:
                    return this._cars.filter(item => +item.price >= +this._priceFilter[0] && +item.price <= +this._priceFilter[1])
                        .filter(item => item.promo?item.promo.find(item2=>this._activePromo.includes(item2['promo_name'])):false)

            }
        }

    }

    setSortState(value) {
        this._sortState = value
    }

    get SortState() {
        return this._sortState
    }

    setPriceFilter(data) {
        this._priceFilter = data
    }

    get Promo() {
        return [...this._promo]
    }

    get HiddenPromo(){
        return [...this._hiddenPromo]
    }

    setActivePromo(data) {
        this._activePromo = data
    }

    get ActivePromo() {
        return this._activePromo
    }
    get CountPromo(){
        return this._countPromo
    }
}

export default new ResultStore()