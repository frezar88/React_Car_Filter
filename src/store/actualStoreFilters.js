import {makeAutoObservable} from "mobx";

class ActualStoreFilter {

    constructor() {
        makeAutoObservable(this)
    }


}
export default new ActualStoreFilter()