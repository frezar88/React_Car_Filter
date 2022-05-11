import {makeAutoObservable} from "mobx";

class FilterStore {
    
    constructor() {
        makeAutoObservable(this)
    }



}

export default new FilterStore()