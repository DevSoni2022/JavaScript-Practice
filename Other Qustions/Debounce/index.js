let counter = 0;
const getData = ()=>{
console.log("Search Item called",counter++)
}

const DoSomeMegic = function(fn,d){
    debugger
let timer ;

return function(){
    let context = this,args =arguments;

    clearTimeout(timer)
    timer = setTimeout(()=>{
fn.apply(context,args)
    },d)
}
}

const betterFunction = DoSomeMegic(getData,400)