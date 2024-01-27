const prices: number[] = [100, 150, 200, 250];

let pricesCurr:string[] = prices.map((price) => price + " р");
console.log(pricesCurr);

// Task #2

const users: any[] = [
    ["alex", 32],
    ["tomas", 17],
    ["olga", 14],
    ["andre", 24]
];
let usersUnder18:any[] = users.filter((user) => {
    if (user[1] > 18) return true;
});

console.log(usersUnder18);

// Task #3
interface Item {
    title:string,
    price:number
}

const item: Item[] = [
    { title: "пицца", price: 200 },
    { title: "баранина", price: 300 },
    { title: "креветки", price: 400 }
];

let sum: number = item.reduce((acc:number, item) => {
    acc += item.price;
    return acc;
}, 0);

console.log(sum);

