var prices = [100, 150, 200, 250];
var pricesCurr = prices.map(function (price) { return price + " р"; });
console.log(pricesCurr);
// Task #2
var users = [
    ["alex", 32],
    ["tomas", 17],
    ["olga", 14],
    ["andre", 24]
];
var usersUnder18 = users.filter(function (user) {
    if (user[1] > 18)
        return true;
});
console.log(usersUnder18);
var item = [
    { title: "пицца", price: 200 },
    { title: "баранина", price: 300 },
    { title: "креветки", price: 400 }
];
var sum = item.reduce(function (acc, item) {
    acc += item.price;
    return acc;
}, 0);
console.log(sum);
