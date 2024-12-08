"use strict";
const literal = (a, b, type) => {
    if (type === "as-number") {
        return +a + +b;
    }
    else {
        return a.toString() + b.toString();
    }
};
console.log(literal(10, 20, "as-number"));
console.log(literal("user", "name", "as-string"));
