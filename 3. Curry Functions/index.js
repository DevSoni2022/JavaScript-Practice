let curry = () =>{
    let total =0;

    return function(num = 0){
        total  = total + num;
        return total;
    }
}
const sum = curry()

console.log(sum(4))
console.log(sum(4))
console.log(sum(4))

