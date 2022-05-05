import {makeAutoObservable} from "mobx";

class UiStore {
    _mobileBlock = {
        show: false,
    }
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

    get MobileMenu() {
        return this._mobileBlock
    }

}

export default new UiStore()