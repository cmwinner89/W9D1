// Write a sum function that takes any number of arguments:

// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;
// Solve it first using the arguments keyword,
// then rewrite your solution to use the ... rest operator.


function sum() {
    let runningTotal = 0;
    return function (num) {
        runningTotal += num;
        console.log(runningTotal)
    }
}

function sum2() {
    let runningTotal = 0;
    return function (...num) {
        while (num.length > 0) {
        runningTotal += num.pop();
        console.log(runningTotal)
        }
    }
}


Function.prototype.myBind = function(ctx, ...bindTimeArgs) {
    const that = this;
    return function (...callTimeArgs) {
        return that.call(ctx, ...bindTimeArgs, ...callTimeArgs);
    }
}