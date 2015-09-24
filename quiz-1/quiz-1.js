// #1 
for (var i = 0; i < 10; i++)
{
setTimeout(function () {
console.log(i);
}, i * 1000);
}

// 1a. What will the effect and output of this script be?

// The code will print out 10, 10 times.

// 1b. What did the developer probably intend it to output?

// The developer intended to print out 0-9 every second

// 1c. Why does it not do this?

// Because var i is being multiplied at every iteration * second

// 1d. How could you fix it to do that?

// The setTimeout takes one second before it runs, but the for loop takes less at than a second to run. Because of this by the time its ready to display (i) value, its value is already equal to 10. You can fix it by adding in a new function timeDelay and calling it inside the for loop. We can put (i) in this function so it passes by reference instead of the value. You also need to remove var i multiplying every second.

for (var i = 0; i < 10; i++)
{
 timeDelay(i);   
}
function timeDelay(i){

setTimeout(function () {
        console.log(i);
    }, 1000);
}


