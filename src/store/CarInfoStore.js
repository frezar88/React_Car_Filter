import {makeAutoObservable} from "mobx";

class CarInfoStore {
    _accord_data = []
    _car_info = []
    _modification_data = []
    _recommended_cars = []

    constructor() {
        makeAutoObservable(this)
    }

    setModificationData(data) {
        const modification = data['modification_package']['opt']

        console.log(modification)
        this._modification_data = modification
    }

    setRecommendedCars(data){
        this._recommended_cars = data
    }

    setAccordData(data) {
        let tempObj = {}
        let tempArr = []
        let versionOptions = data['version_options']
        versionOptions.forEach(el => {
            this.getAccordNameForSetAccordData(el, tempObj)
        })
        for (let key in tempObj) {
            tempArr.push({name: key, value: tempObj[key]})
        }
        this._accord_data = tempArr
    }

    getAccordNameForSetAccordData(data, obj) {
        obj[data['option-group-name']] = []
        if (obj[data['option-group-name']]) {
            data.options.forEach(el => {
                obj[data['option-group-name']].push(el['option-name'])
            })
        }
    }

    getRecommendedCars(){
        return this._recommended_cars
    }

    getAccordData() {
        return this._accord_data
    }

    getModificationData() {
        return this._modification_data
    }

    setCarInfo(data) {
        this._car_info = data
    }

    getCarInfo() {
        return this._car_info
    }
}

export default new CarInfoStore()