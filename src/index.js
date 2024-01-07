import "./style.css";

// Task #1

const prices = [100, 150, 200, 250];

let pricesCurr = prices.map((price) => price + " р");
console.log(pricesCurr);

// Task #2

const users = [
    ["alex", 32],
    ["tomas", 17],
    ["olga", 14],
    ["andre", 24]
];
let usersUnder18 = users.filter((user) => {
    if (user[1] > 18) return true;
});
console.log(usersUnder18);

// Task #3

const items = [
    { title: "пицца", price: 200 },
    { title: "баранина", price: 300 },
    { title: "креветки", price: 400 }
];

let sum = items.reduce((acc, item) => {
    acc += item.price;
    return acc;
}, 0);

console.log(sum);
