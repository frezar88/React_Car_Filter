import {makeAutoObservable} from "mobx";
import {axiosGetCars} from "../http/requests";
import FilterStore from './filterStore'


class CarsStore {
    _cars = [];
    _sortState = '';


    constructor() {
        makeAutoObservable(this)
    }

    setStartedCars() {
        axiosGetCars().then((data) => {
                this.bruteForceAnArray(data)
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


    bruteForceAnArray(data){
        data.data['cars'].forEach(({promo,brand,model}) => {
            this.collectStartedPromoAndCountPromo(promo)
            this.collectStartedBrands(brand)
            this.collectStartedModels(model)
        })

    }
//----------brand----------
    collectStartedBrands(brand){
        if(brand){
            FilterStore.setStartedBrands(brand)
        }
    }

//---------model---------
    collectStartedModels(model){
        if(model){
            FilterStore.setStartedModel(model)
        }
    }

//----------promo----------
    collectStartedPromoAndCountPromo(promo) {

            if (promo.length) {
                promo.forEach(el => {
                    FilterStore.setStartedPromo(el['promo_name'])
                    this.collectCountPromo(el)
                })
            }

    }
    collectCountPromo(el) {
        let allPromo =FilterStore.getCountPromo()
        if (allPromo[el['promo_name']] || allPromo[el['promo_name']]===0){
            allPromo[el['promo_name']]+=1
        }else{
            allPromo[el['promo_name']]=0
        }
        FilterStore.setCountPromo(allPromo)

    }

    setSortState(data) {
        this._sortState = data
    }

    getSortState() {
        return this._sortState
    }

    getCats() {
        return this._cars
    }

    setCars(data) {
        this._cars = data
    }
}

export default new CarsStore()