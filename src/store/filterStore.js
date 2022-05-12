import {makeAutoObservable} from "mobx";

class FilterStore {
    _startedFilters = {
        'promo': new Set(),
        'brand': new Set(),
        'model': new Set(),
        'year': new Set(),
        'transmission_type':new Set(),
        'drive_type_id':new Set(),
        'body':new Set(),
        'location': new Set(),
        'color': new Set()
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
        return [...this._startedFilters.promo].sort((a,b)=>a.localeCompare(b))
    }
//---------brand--------

    setStartedBrand(data){
        this._startedFilters.brand.add(data)
    }

    getStartedBrand(){
        return [...this._startedFilters.brand].sort((a,b)=>a.localeCompare(b))
    }
//---------model---------

    setStartedModel(data){
        this._startedFilters.model.add(data)
    }

    getStartedModel(){
       return  [...this._startedFilters.model].sort((a,b)=>a.localeCompare(b))
    }
//---------year---------
    setStartedYear(data){
        this._startedFilters.year.add(data)
    }

    getStartedYear(){
        return  [...this._startedFilters.year].sort((a,b)=>a - b)
    }

//---------transmission_type----------
    setStartedTransmission(data){
        this._startedFilters.transmission_type.add(data)
    }

    getStartedTransmission(){
        return  [...this._startedFilters.transmission_type]
    }

//---------drive_type_id----------
    setStartedDrive(data){
        this._startedFilters.drive_type_id.add(data)
    }

    getStartedDrive(){
        return  [...this._startedFilters.drive_type_id].sort((a,b)=>a.localeCompare(b))
    }

//---------body----------
    setStartedBody(data){
        this._startedFilters.body.add(data)
    }

    getStartedBody(){
        return  [...this._startedFilters.body].sort((a,b)=>a.localeCompare(b))
    }

//---------location----------
    setStartedLocation(data){
        this._startedFilters.location.add(data)
    }

    getStartedLocation(){
        return  [...this._startedFilters.location].sort((a,b)=>a.localeCompare(b))
    }

//---------color----------
    setStartedColor(data){
        this._startedFilters.color.add(data)
    }

    getStartedColor(){
        return  [...this._startedFilters.color].sort((a,b)=>a.localeCompare(b))
    }



    setCountPromo(data) {
        this._countPromo = data
    }

    getCountPromo() {
        return this._countPromo
    }


}

export default new FilterStore()