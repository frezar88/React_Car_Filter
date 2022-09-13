import {makeAutoObservable} from "mobx";

class ChangeFormStore {
    _changeData = {
        'promo': [],
        'brand': [],
        'model': [],
        'year': {min: 0, max: 0},
        'power_engine': {min: 0, max: 0},
        'transmission_type': [],
        'drive_type_id': [],
        'body': [],
        'location': [],
        'color': [],
        'price': {min: 0, max: 0},
        'complectation': [],
        'class_car':[],
        'fuel_type':[]
    }


    constructor() {
        makeAutoObservable(this)
    }

    getAllChangeFilters() {
        return this._changeData
    }
    setAllChangeFilters(data){
        this._changeData = data
    }

// ---------price----------
    setChangePrice(data) {
        this._changeData.price = data
    }

    getChangePrice() {
        return this._changeData.price
    }

// ---------class----------
    setChangeClass(data) {
        this._changeData.class_car = data
    }

    getChangeClass() {
        return this._changeData.class_car
    }

//----------promo----------
    setChangePromo(data) {
        this._changeData.promo = data
    }

    getChangePromo() {
        return this._changeData.promo
    }

//----------brand----------
    setChangeBrand(data) {
        this._changeData.brand = data
    }

    getChangeBrand() {
        return this._changeData.brand
    }

//----------model----------
    setChangeModel(data) {
        this._changeData.model = data
    }

    getChangeModel() {
        return this._changeData.model
    }

//----------year----------
    setChangeYear(data) {
        this._changeData.year = data
    }

    getChangeYear() {
        return this._changeData.year
    }

    //----------power_engine----------
    setChangePowerEngine(data) {
        this._changeData.power_engine = data
    }

    getChangePowerEngine() {
        return this._changeData.power_engine
    }

//----------transmission_type----------
    setChangeTransmission(data) {
        this._changeData.transmission_type = data
    }

    getChangeTransmission() {
        return this._changeData.transmission_type
    }

//----------drive_type_id----------
    setChangeDrive(data) {
        this._changeData.drive_type_id = data
    }

    getChangeDrive() {
        return this._changeData.drive_type_id
    }

//----------body----------
    setChangeBody(data) {
        this._changeData.body = data
    }

    getChangeBody() {
        return this._changeData.body
    }

//----------location----------
    setChangeLocation(data) {
        this._changeData.location = data
    }

    getChangeLocation() {
        return this._changeData.location
    }

//----------color----------
    setChangeColor(data) {
        this._changeData.color = data
    }

    getChangeColor() {
        return this._changeData.color
    }
//----------fuel_type----------
    setChangeFuelType(data) {
        this._changeData.fuel_type = data
    }

    getChangeFuelType() {
        return this._changeData.fuel_type
    }

//--------complectation-----
    setChangeComplectation(data) {
        this._changeData.complectation = data
    }

    getChangeComplectation() {
        return this._changeData.complectation
    }
}

export default new ChangeFormStore()