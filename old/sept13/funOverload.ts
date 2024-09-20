function greet(name: string): string;
function greet(id: number): string;

function greet(input: string | number): string {
    if (typeof input === "string") {
        return `Heyya, ${input}!`;
    } else if (typeof input === "number") {
        return `Heyya, ${input}!`;
    }
    return "";
}

console.log(greet("Jnanesh"));
console.log(greet(123));
