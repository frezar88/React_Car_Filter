import {makeAutoObservable} from "mobx";

class FilterStore {
    _startedFilters = {
        promo: new Set(),
        brand: new Set(),
        model: new Set(),
        year: new Set(),
    }
    _countPromo = {};

    constructor() {
        makeAutoObservable(this)
    }

    getAllStartedFilters() {
        return this._startedFilters
    }

//----------promo---------

    setStartedPromo(data) {
        this._startedFilters.promo.add(data)
    }

    getStartedPromo() {
        return [...this._startedFilters.promo]
    }
//---------brand--------

    setStartedBrands(data){
        this._startedFilters.brand.add(data)
    }

    getStartedBrands(){
        return [...this._startedFilters.brand]
    }
//---------model---------

    setStartedModel(data){
        this._startedFilters.model.add(data)
    }

    getStartedModel(){
       return  [...this._startedFilters.model]
    }


    setCountPromo(data) {
        this._countPromo = data
    }

    getCountPromo() {
        return this._countPromo
    }


}

export default new FilterStore()