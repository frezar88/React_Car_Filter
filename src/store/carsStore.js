import {makeAutoObservable} from "mobx";
import {axiosGetCars} from "../http/requests";
import FilterStore from './filterStore'
import ChangeFormStore from './changeFormStore'
import {CheckUrlAndClickInput} from "../const";


class CarsStore {
    _cars = [];
    _sortState = '';
    _actualCarList = []
    _regionPrice = ''


    constructor() {
        makeAutoObservable(this)
    }

    setRegionPrice(data) {
        this._regionPrice = data
    }

    getRegionPrice() {
        return this._regionPrice
    }

    setStartedCars() {
        axiosGetCars().then((data) => {
                this.setRegionPrice(data.data['isPrice'])
                this.bruteForceAnArray(data)
                this.setCars([...data.data['cars']])
                setTimeout(() => {
                    CheckUrlAndClickInput()
                }, 1000)

            }
        )
    }

    get CarsList() {
        switch (this.getSortState()) {
            case 'asc':
                return [...this.createActualCarList()].sort((a, b) => a.price - b.price)
                    .filter(item => ChangeFormStore.getChangeBrand().length ? ChangeFormStore.getChangeBrand().includes(item.brand) : item)
            case 'desc':
                return [...this.createActualCarList()].sort((a, b) => b.price - a.price)
                    .filter(item => ChangeFormStore.getChangeBrand().length ? ChangeFormStore.getChangeBrand().includes(item.brand) : item)
            default:
                return this.createActualCarList()
        }

    }

    createActualCarList() {
        if (ChangeFormStore.getChangeBrand().length
            || ChangeFormStore.getChangeModel().length
            || ChangeFormStore.getChangeYear().length
            || ChangeFormStore.getChangeTransmission().length
            || ChangeFormStore.getChangeDrive().length
            || ChangeFormStore.getChangeBody().length
            || ChangeFormStore.getChangeLocation().length
            || ChangeFormStore.getChangeColor().length
            || ChangeFormStore.getChangePromo().length
            || ChangeFormStore.getChangePrice().min
            || ChangeFormStore.getChangePrice().max
            || ChangeFormStore.getChangeComplectation().length
        ) {
            let actualCars = this.getCats()
                .filter(item => ChangeFormStore.getChangePrice().min ? ChangeFormStore.getChangePrice().min <= item.price : item)
                .filter(item => ChangeFormStore.getChangePrice().max ? ChangeFormStore.getChangePrice().max >= item.price : item)
                .filter(item => ChangeFormStore.getChangeBrand().length ? ChangeFormStore.getChangeBrand().includes(item.brand) : item)
                .filter(item => ChangeFormStore.getChangeModel().length ? ChangeFormStore.getChangeModel().includes(item.model) : item)
                .filter(item => ChangeFormStore.getChangeYear().length ? ChangeFormStore.getChangeYear().includes(item.years) : item)
                .filter(item => ChangeFormStore.getChangeTransmission().length ? ChangeFormStore.getChangeTransmission().includes(item['transmission_type']) : item)
                .filter(item => ChangeFormStore.getChangeDrive().length ? ChangeFormStore.getChangeDrive().includes(item['drive_type_id']) : item)
                .filter(item => ChangeFormStore.getChangeBody().length ? ChangeFormStore.getChangeBody().includes(item.body) : item)
                .filter(item => ChangeFormStore.getChangeLocation().length ? ChangeFormStore.getChangeLocation().includes(item.location) : item)
                .filter(item => ChangeFormStore.getChangeColor().length ? ChangeFormStore.getChangeColor().includes(item.color) : item)
                .filter(item => ChangeFormStore.getChangeComplectation().length ? ChangeFormStore.getChangeComplectation().includes(item.complectation) : item)
                .filter(item => ChangeFormStore.getChangePromo().length
                    ? item.promo ? item.promo.find(item2 => ChangeFormStore.getChangePromo().includes(item2['promo_name'])) : false
                    : item)
            this.setActualCarList(actualCars)


            return actualCars

        }
        this.setActualCarList([])
        return this.getCats()

    }

    setActualCarList(data) {
        this._actualCarList = data
    }

    getActualCarList() {
        return this._actualCarList
    }

    bruteForceAnArray(data) {
        this.collectStartedPrice(data)
        let obj = {}
        let arr = []
        data.data['cars'].forEach(({
                                       promo,
                                       brand,
                                       model,
                                       years,
                                       transmission_type,
                                       drive_type_id,
                                       body,
                                       location,
                                       color,
                                       complectation
                                   }) => {
            this.collectStartedPromoAndCountPromo(promo)
            this.collectStartedBrands(brand)
            this.collectStartedModels(model)
            this.collectStartedYear(years)
            this.collectStartedTransmission(transmission_type)
            this.collectStartedDrive(drive_type_id)
            this.collectStartedBody(body)
            this.collectStartedLocation(location)
            this.collectStartedColor(color)
            this.collectStartedComplectations(model, complectation, obj)
        })

        for (let key in obj) {
            arr.push({[key]: [...obj[key]]})
        }
        FilterStore.setStartedComplectation(arr)
    }


//-------complectations-------
    collectStartedComplectations(model, complectations, obj,) {
        if (!obj[model]) {
            obj[model] = new Set([])
        } else {
            obj[model].add(complectations)
        }


    }


//---------price-----------
    collectStartedPrice(data) {
        let sortedArrToGetMinMaxPrice = data.data['cars'].sort((a, b) => a.price - b.price)
        FilterStore.setStartedPrice(
            {
                min: sortedArrToGetMinMaxPrice[0].price,
                max: sortedArrToGetMinMaxPrice[sortedArrToGetMinMaxPrice.length - 1].price
            })

    }

//----------brand----------
    collectStartedBrands(brand) {
        if (brand) {
            FilterStore.setStartedBrand(brand)
        }
    }


//---------model---------
    collectStartedModels(model) {
        if (model) {
            FilterStore.setStartedModel(model)
        }
    }


//---------year---------
    collectStartedYear(years) {
        if (years) {
            FilterStore.setStartedYear(years)
        }
    }


//---------transmission---------
    collectStartedTransmission(transmission_type) {
        if (transmission_type) {
            FilterStore.setStartedTransmission(transmission_type)
        }
    }


//---------drive---------
    collectStartedDrive(drive_type_id) {
        if (drive_type_id) {
            FilterStore.setStartedDrive(drive_type_id)
        }
    }


//---------body---------
    collectStartedBody(body) {
        if (body) {
            FilterStore.setStartedBody(body)
        }
    }


//---------location---------
    collectStartedLocation(location) {
        if (location) {
            FilterStore.setStartedLocation(location)
        }
    }


//---------color---------
    collectStartedColor(color) {
        if (color) {
            FilterStore.setStartedColor(color)
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
        let allPromo = FilterStore.getCountPromo()
        if (allPromo[el['promo_name']] || allPromo[el['promo_name']] === 0) {
            allPromo[el['promo_name']] += 1
        } else {
            allPromo[el['promo_name']] = 0
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