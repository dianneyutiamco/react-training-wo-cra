import { Human } from "./models/human.model";

const newHuman1: Human = new Human();
newHuman1.firstName = "New Human Name";

const anotherHuman: Human = new Human({firstName: "Another Human Name"});


function add(val1: number, val2: number): number {
    return val1 + val2;
}

// add(1, 2);
// add('string', 1); <- not ok

// const human = new Human({firstName: "Human First Name"});
// displayMessage(human);

function displayMessage(human: Human): string {
    return `Hello ${human.firstName}`;
}

function voidExample(): void {
    add(1, 2);
}

// never going to reach the end of a function
function neverExample(): never {
    throw Error;
}

