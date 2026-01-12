alert("Welcome to the Lab")
console.log("Welcome to the Lab")

const name = prompt("Enter your name")
let age = Number(prompt("Enter your age"))
const email = prompt












function validateInteger(message, min = null, max = null) {
    while (true) {
        const option = prompt(message);

        if (option === null) {
            console.error("Action cancelled by the user");
            return null;
        }

        const value = Number(option.trim());

        if (
            Number.isInteger(value) &&
            (min === null || value >= min) &&
            (max === null || value <= max)
        ) {
            return value;
        }

        alert("Invalid option, enter a valid menu option");
    }
};

