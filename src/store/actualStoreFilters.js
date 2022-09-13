import {makeAutoObservable} from "mobx";
import CarsStore from './carsStore'

class ActualStoreCar {
    _actualFilters = {
        'promo': new Set(),
        'brand': new Set(),
        'model': new Set(),
        'year': new Set(),
        'transmission_type': new Set(),
        'drive_type_id': new Set(),
        'body': new Set(),
        'location': new Set(),
        'color': new Set(),
        'price': {min: 0, max: 0},
        'complectation': [],
        'class_car':new Set(),
        'fuel_type':new Set(),

    }

    constructor() {

        makeAutoObservable(this)
    }

    getActualFilters() {
        return this._actualFilters
    }

    takeActualCarList(rangeInputs) {
        this.resetAllSetActualFilter()
        if (CarsStore.getActualCarList().length) {
            CarsStore.getActualCarList().forEach(({
                                                      promo,
                                                      brand,
                                                      model,
                                                      years,
                                                      transmission_type,
                                                      drive_type_id,
                                                      body,
                                                      location,
                                                      color,
                                                      class_car,
                                                      fueltype
                                                  }) => {
                this.setActualModel(model)
                this.setActualClass(class_car)
                this.setActualBrand(brand)
                this.setActualYear(years)
                this.setActualTransmission(transmission_type)
                this.setActualDrive(drive_type_id)
                this.setActualBody(body)
                this.setActualLocation(location)
                this.setActualColor(color)
                this.setActualFuelType(fueltype)
                if (promo.length) {
                    promo.forEach(el => {
                        this.setActualPromo(el['promo_name'])
                    })
                }
            })
            if (!rangeInputs) {
                let SortArray = CarsStore.getActualCarList().sort((a, b) => a.price - b.price)
                this.setActualPrice({min: SortArray[0].price, max: SortArray[SortArray.length - 1].price})
            }


        }
        return this.getActualFilters()
    }

    setActualBrand(data) {
        this._actualFilters.brand.add(data)
    }

    getActualBrand() {
        return [...this._actualFilters.brand]
    }
    getActualClass() {
        return [...this._actualFilters.class_car]
    }
    setActualClass(data) {
        this._actualFilters.class_car.add(data)
    }

    getActualFuelType() {
        return [...this._actualFilters.fuel_type]
    }
    setActualFuelType(data) {
        this._actualFilters.fuel_type.add(data)
    }

    setActualModel(data) {
        this._actualFilters.model.add(data)
    }

    getActualModel() {
        return [...this._actualFilters.model]
    }

    setActualYear(data) {
        this._actualFilters.year.add(data)
    }

    getActualYear() {
        return [...this._actualFilters.year]
    }

    setActualTransmission(data) {
        this._actualFilters.transmission_type.add(data)
    }

    getActualTransmission() {
        return [...this._actualFilters.transmission_type]
    }

    setActualDrive(data) {
        this._actualFilters.drive_type_id.add(data)
    }

    getActualDrive() {
        return [...this._actualFilters.drive_type_id]
    }

    setActualBody(data) {
        this._actualFilters.body.add(data)
    }

    getActualBody() {
        return [...this._actualFilters.body]
    }

    setActualLocation(data) {
        this._actualFilters.location.add(data)
    }

    getActualLocation() {
        return [...this._actualFilters.location]
    }

    setActualColor(data) {
        this._actualFilters.color.add(data)
    }

    getActualColor() {
        return [...this._actualFilters.color]
    }

    setActualPromo(data) {
        this._actualFilters.promo.add(data)
    }

    getActualPromo() {
        return [...this._actualFilters.promo]
    }

    setActualPrice(data) {
        this._actualFilters.price = data
    }

    getActualPrice() {
        return this._actualFilters.price
    }


    resetAllSetActualFilter() {
        this._actualFilters.promo.clear()
        this._actualFilters.brand.clear()
        this._actualFilters.model.clear()
        this._actualFilters.year.clear()
        this._actualFilters.transmission_type.clear()
        this._actualFilters.body.clear()
        this._actualFilters.location.clear()
        this._actualFilters.color.clear()
        this._actualFilters.drive_type_id.clear()
        this._actualFilters.price = {min: 0, max: 0}
        // ChangeFormStore.setChangeComplectation([])
    }
}

export default new ActualStoreCar()