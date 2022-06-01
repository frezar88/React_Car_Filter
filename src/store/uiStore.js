import {makeAutoObservable} from "mobx";

class UiStore {
    _show_spinner=true

    constructor() {
        makeAutoObservable(this)
    }

//-----------mobile------------

    setSpinnerState(data){
        this._show_spinner = data
    }
    getSpinnerState(){
        return this._show_spinner
    }
}

export default new UiStore()