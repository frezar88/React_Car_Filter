import {makeAutoObservable} from "mobx";

class Counter {
    counter = 0
    timer = 60
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.counter = this.counter + 1
        console.log('increment', this.counter)
    }

    decrement() {
        this.counter = this.counter - 1
        console.log('decrement', this.counter)
    }

    get total(){
        return `Count + timer = ` + this.timer +this.counter
    }
}

export default new Counter()