const promise1 =  Promise.reject(0);
const promise2 = new Promise(resolve =>
    setTimeout(()=>resolve('quick'),100)
    )
const promise3 = new Promise(resolve =>
   setTimeout(()=>resolve('slow',500)) 
    );
    
    const promises = [promise1,promise2,promise3];

    Promise.any(promises)
    .then(value => console.log('any-resolve',value))
    .catch(err=>console.log('any-reject',err));

    Promise.race(promises)
    .then(value => console.log('race-resolve',value))
    .catch(err=>console.log('race-reject',err))