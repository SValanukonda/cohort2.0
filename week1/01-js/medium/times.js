/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(starttime,endtime) {

    return (endtime-starttime)/1000;
}


function sum(n){
    ans =0 ;
    for (let i =0 ;i<=n;i++){
        ans+=i;
    }
    return(ans)
}

const starttime = new Date()
const result=sum(100000);
const endtime = new Date()
const duration = calculateTime(starttime,endtime);
console.log("ans : "+result)
console.log(starttime);
console.log(endtime);
console.log("duration of run (sec) : "+duration);
