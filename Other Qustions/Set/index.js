const Store = function(){

    this.list = {};

    this.set = function(key,value){
        this.list[key] = value
    }

    this.get = function(key){
        return this.list[key];
    }

    this.has = function(key){
        return !this.list[key]
    }
}

const store = new Store();

store.set('a',1)
store.set('b',3)
store.set('c',5)
store.set('d',7)
console.log(store.list)
let test =  store.get('a')
console.log(test)
let test2 =  store.has('a')

console.log(test2)

