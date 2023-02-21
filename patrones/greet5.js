let greeting = "Hello from greet 5";

let greet = () => {
    console.log(greeting);
}

let sleep = () => {
    console.log("I'm sleeping");
}

let craft = () => {
    console.log("I'm crafting");
}

module.exports = {
    greet,
    sleep,
    craft
}