// Task #1
function BalanceAccount(user) {
    let account = { name: user, balance: 0 };
    return account;
}

let alexAccount = BalanceAccount('alex');
alexAccount.balance = 200;
let ivanAccount = BalanceAccount('ivan');

console.log(alexAccount, ivanAccount);

// Task #2

const globalCount = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    }
}

let counter1 = globalCount();
let counter2 = globalCount();

counter1();
counter1();
counter1();
counter2();

// Task #3

const items = [{
    type: 'laptop',
    model: 'HP',
    price: 700,
},
{
    type: 'laptop',
    model: 'DELL',
    price: 350,
},
{
    type: 'phone',
    model: 'Samsung',
    price: 900,
},
{
    type: 'phone',
    model: 'Xiaomi',
    price: 1000,
},
{
    type: 'phone',
    model: 'Nokia',
    price: 200,
},
{
    type: 'phone',
    model: 'Iphone',
    price: 1000,
},
{
    type: 'laptop',
    model: 'MSI',
    price: 1500,
}]


let countPhones = items.filter(item => item.type == 'phone').length;
let allCostLaptop = items.filter(item => item.type == 'laptop').reduce((cost, item) => { cost += item.price; return cost }, 0);

console.log(countPhones, allCostLaptop, items);

let descriptionForDisctountPrice = items.map(item => `${item.type} ${item.model} special price only: ${0.9*item.price}`);
console.log(descriptionForDisctountPrice);
