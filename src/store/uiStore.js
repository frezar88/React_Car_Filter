import {makeAutoObservable} from "mobx";

class UiStore {
    _mobileBlock = {
        show: false,
    }
    _page = 'filter'
    _resetSliderRange=false
    _show_no_car = false
    _arrayCountSlice=27
    _car_id = ''

    _show_spinner=true


    constructor() {
        makeAutoObservable(this)
    }

    setCarId(data){
        this._car_id = data
    }

    getCarId(){
        return this._car_id
    }

    setPage(data){
        this._page = data
    }

    getPage(){
        return this._page
    }

    setShowNoCar(data){
        this._show_no_car = data
    }
    getShowNoCar(){
        return this._show_no_car
    }

//-----------mobile------------
    showMobileMenu() {
        this._mobileBlock.show = true
    }

    closeMobileMenu() {
        this._mobileBlock.show = false
    }

    getMobileMenu (){
        return this._mobileBlock.show
    }

    get MobileMenu() {
        return this._mobileBlock
    }
    setArrayCountSlice(data){
        this._arrayCountSlice = data
    }
    getArrayCountSlice(){
        return  this._arrayCountSlice
    }

    setResetSliderRange(data){
        this._resetSliderRange = data
    }
    getResetSliderRange(){
        return this._resetSliderRange
    }


    setSpinnerState(data){
        this._show_spinner = data
    }
    getSpinnerState(){
        return this._show_spinner
    }
}

export default new UiStore()