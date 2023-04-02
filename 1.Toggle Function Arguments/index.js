const toggle  = (...args)=>{
    let index = 0; 

    return function(){
        if(args.length){
            if(index >= args.length)
            {
                index = 0;
            }
            return args[index++];
            
        }
    }
}
// const onOff = toggle("1","2","3")
const onOff = toggle("On","Off")

console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())
console.log(onOff())