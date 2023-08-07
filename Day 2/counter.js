let counter =0;
var createCounter = function(n) {
    return function(...arg) {
        return counter = n++;
        
        
    };
};
createCounter(9);