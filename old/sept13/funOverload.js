function greet(input) {
    if (typeof input === "string") {
        return "Hello, ".concat(input, "!");
    }
    else if (typeof input === "number") {
        return "Hello, user with ID: ".concat(input, "!");
    }
    else if (Array.isArray(input)) {
        return "Hello, ".concat(input.join(", "), "!");
    }
    return "";
}
console.log(greet("Alice"));
console.log(greet(123));
console.log(greet(["Bob", "Charlie", "Dave"]));
