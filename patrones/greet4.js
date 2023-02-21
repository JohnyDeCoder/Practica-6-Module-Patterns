module.exports = function Greetr() {
    this.greeting = "Hello from the funtion constructor greet4";
    this.greet = function () {
        console.log(this.greeting);
    }
}