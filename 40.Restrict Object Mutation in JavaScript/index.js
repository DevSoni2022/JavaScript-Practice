// let obj ={
// value : 10
// }
// Object.seal(obj)

// //Single Level that work
// const  test =(obj)=>{
//     console.log(obj,"Befor change")
//     obj.b =10
// return obj.value =20;
// }

// test(obj)
// console.log(obj,"After change");


// Object.seal  - > This method prevent object mutation in that can not delete existing property and also can not add new propert.
// Object.freeZe - The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable

let obj2 = {
    a:1,
        b:{
            c:10
        }
}

console.log(obj2,"Before Change")
function deepFreeze (obj){
    for(let key in obj){
      const val = obj[key];
      if(typeof val === "object"){
        deepFreeze(val);
      }
    }
    
    return Object.freeze(obj);
  }


deepFreeze(obj2)
obj2.b.c=30;
console.log(obj2,"after Change")
