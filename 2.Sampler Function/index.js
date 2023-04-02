const sampleFunction = (callback, count =1) => {
  let track = 0;

  return function (...args) {
    track++;
    if(track ===count)
    callback(...args)
    track=0;
  };
};
function message(msg){
    console.log("Hello");
}

const codeex = sampleFunction(message,4);
console.log(codeex());
console.log(codeex());
console.log(codeex());
console.log(codeex());
console.log(codeex());
console.log(codeex());
console.log(codeex());
console.log(codeex());
