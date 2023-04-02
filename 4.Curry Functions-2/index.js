const sum = (...args) =>{
    let storage =[...args];

    if(args.length === 0){
        return 0;
    }
    const temp = function(...args2){
        storage.push(...args2);
        if(args2.length === 0){
            return storage.reduce((a,b)=>a+b,0)
        }
        else 
        return temp;
    }
    return temp;
}
let total = sum(10)(10,10)(50)(30)()
console.log(total)