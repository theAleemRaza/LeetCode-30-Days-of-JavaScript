var expect = function(val) {
    return {
        toBe: function(newVal) {
            if (val === newVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(newVal) {
            if (val !== newVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

try {
    expect(5).toBe(5);
} catch (error) {
    console.error("error:", error.message);
}

try {
    expect(5).notToBe(5);
} catch (error) {
    console.error("error:", error.message);
}
