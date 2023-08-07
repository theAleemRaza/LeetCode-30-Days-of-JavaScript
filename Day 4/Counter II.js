function createCounter(init) {
    let current = init;

    return {
        increment: function() {
            current++;
            return current;
        },
        decrement: function() {
            current--;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
}

function executeCounterOperations(init, calls) {
    const counter = createCounter(init);
    const results = [];

    for (const call of calls) {
        if (call === "increment") {
            results.push(counter.increment());
        } else if (call === "decrement") {
            results.push(counter.decrement());
        } else if (call === "reset") {
            results.push(counter.reset());
        }
    }

    return results;
}

// Example 1
const init1 = 5;
const calls1 = ["increment", "reset", "decrement"];
console.log(executeCounterOperations(init1, calls1)); // Output: [6, 5, 4]

// Example 2
const init2 = 0;
const calls2 = ["increment", "increment", "decrement", "reset", "reset"];
console.log(executeCounterOperations(init2, calls2)); // Output: [1, 2, 1, 0, 0]
