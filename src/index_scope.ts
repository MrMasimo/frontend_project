// Task #1
interface Account {
    name:string,
    balance:number
}

function BalanceAccount(user:string):Account {
    let account = { name: user, balance: 0 };
    return account;
}

let alexAccount:Account = BalanceAccount('alex');
alexAccount.balance = 200;
let ivanAccount:Account = BalanceAccount('ivan');

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

interface Goods{
    type: string,
    model: string,
    price: number,
}

const items:Goods[] = [{
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


let countPhones:number = items.filter(item => item.type == 'phone').length;
let allCostLaptop:number = items.filter(item => item.type == 'laptop').reduce((cost:number, item) => { cost += item.price; return cost }, 0);

console.log(countPhones, allCostLaptop);

let descriptionForDisctountPrice:string[] = items.map(item => `${item.type} ${item.model} special price only: ${0.9*item.price}`);
console.log(descriptionForDisctountPrice);
