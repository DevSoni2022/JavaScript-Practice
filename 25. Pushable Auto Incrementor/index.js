// Create a pausable auto incrementer in JavaScript, which takes an initial value and steps 
// as input and increments the initial value with given steps every second. The incrementer 
// can be paused and resumed back.

// https://learnersbucket.com/examples/interview/create-pausable-auto-incrementer/


const Incrementor = (initial =0, steps =1)=>{
    let count = null;

    let intervalId = null;

    const startTime = ()=>{
        if(intervalId === null){
            intervalId = setInterval(()=>{
                console.log(count);
                count  = count + steps;
            },1000)
        }
    }
    const stopTimer = () =>{
        clearInterval(intervalId)
        intervalId = null
    }

    return {startTime,stopTimer}
}

let timerObj = Incrementor(0,1)
timerObj.startTime()