const prompt = require("prompt-sync")();

const welcomeAndGetName = () => {
    console.log("Welcome!");
    const name = prompt(`What is your name: `);
    console.log(`Hello ${name.trim()}, nice to meet you!`);
    return name; 
}

const showOptions = () => {
    console.log("");
    console.log("1 - play a guessing game"); 
    console.log("2 - cheer you on!");
    console.log("Any other key - exit");
}

const sayGoodbye = (username) => {
    console.log(`Goodbye, ${username}`);
}

const main = () => {
    const name = welcomeAndGetName();
    showOptions();
    sayGoodbye(name);
}

main();

