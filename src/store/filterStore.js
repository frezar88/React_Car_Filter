import {makeAutoObservable} from "mobx";
import {axiosGetStartedFilter} from "../http/requests";

class FilterStore {
    _startedFilters = [];
    _competeSet = [];
    _filtersData = {
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
        price:[],
    };


    constructor() {
        makeAutoObservable(this)
    }

    getStartedFilters() {
        axiosGetStartedFilter(this._filtersData).then(data => {
                this._startedFilters = data.data.data
            }
        )

    }

    setFiltersData(data) {
        this._filtersData = {...this._filtersData,...data}
    }


    get FiltersData() {
        return this._filtersData
    }

    setPrice(data){
        this._filtersData = {...this._filtersData,price:data}
    }

    setCompleteSet(data){
        this._competeSet = data
    }
    get CompleteSet(){
        return this._competeSet
    }


    //------------parse data------------//
    get modelFilter(){
        return this._startedFilters.filter((item)=>item.id === 'model')
    }
    get yearFilter(){
        return this._startedFilters.filter((item)=>item.id === 'year')
    }
    get engineFilter(){
        return this._startedFilters.filter((item)=>item.id === 'engine')
    }
    get transmissionFilter(){
        return this._startedFilters.filter((item)=>item.id === 'transmission')
    }
    get driveFilter(){
        return this._startedFilters.filter((item)=>item.id === 'drive')
    }
    get bodyFilter(){
        return this._startedFilters.filter((item)=>item.id === 'body')
    }
    get locationsFilter(){
        return this._startedFilters.filter((item)=>item.id === 'location')
    }
    get colorFilter(){
        return this._startedFilters.filter((item)=>item.id === 'color')
    }
    get priceFilter(){
        return this._startedFilters.filter((item)=>item.id === 'price')
    }

}

export default new FilterStore()