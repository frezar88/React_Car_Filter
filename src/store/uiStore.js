import {makeAutoObservable} from "mobx";

class UiStore {
    _mobileBlock = {
        show: false,
    }
    _resetSliderRange=false

    _arrayCountSlice=27

    constructor() {
        makeAutoObservable(this)
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
}

export default new UiStore()