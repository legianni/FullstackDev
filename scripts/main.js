const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
let foo = `This is sparta ${myHeading}`
// console.log(foo)
// alert(foo)
// promt("Enter a number")
let number1 = prompt("Enter a number");
console.log(typeof (number1))
const myHeading2 = document.querySelector('h2');
if (number1 == 5) {
    myHeading2.textContent = `You entered ${number1} which is 5!`
}
else {
    myHeading2.textContent = `You entered ${number1} which is not 5!`
}