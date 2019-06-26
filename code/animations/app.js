console.log ('hello from js')

// let's define animations

// 1. starting point.
//2. step
//3. time between steps.
//4. total time 
//5. ending point

// you use `setTimeout` as delay
// you can use `setInterval` as 


const timeoutCallback = function(){
    console.log('I timed Out!');
}
setTimeout(timeoutCallback, 1000);



const clockTick = function(){
    console.log('Tick, Tock!');
}
const timer = setInterval(clockTick,1000) // WONT STOP UNTIL i STOP IT OR CLEAR IT 
 clearInterval(timer);




 const fadeNickAway= function(){
     const nick = document.querySelector('.nick');
    //  console.log(getComputedStyle(nick).opacity)
    const currentOpacityAsstring = getComputedStyle(nick).opacity;
    const currentOpacity = parseFloat(currentOpacityAsstring); // convert string to number

   let newOpacity = currentOpacity - 0.01;
    nick.style.opacity= newOpacity;
    if (currentOpacity >= 0){
        setTimeout(fadeNickAway, 10);
    }
 }
 setTimeout(fadeNickAway, 1000);