function BalanceAccount(user) {
    var account = { name: user, balance: 0 };
    return account;
}
var alexAccount = BalanceAccount('alex');
alexAccount.balance = 200;
var ivanAccount = BalanceAccount('ivan');
console.log(alexAccount, ivanAccount);
// Task #2
var globalCount = function () {
    var count = 0;
    return function () {
        console.log(count);
        count++;
    };
};
var counter1 = globalCount();
var counter2 = globalCount();
counter1();
counter1();
counter1();
counter2();
var items = [{
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
    }];
var countPhones = items.filter(function (item) { return item.type == 'phone'; }).length;
var allCostLaptop = items.filter(function (item) { return item.type == 'laptop'; }).reduce(function (cost, item) { cost += item.price; return cost; }, 0);
console.log(countPhones, allCostLaptop);
var descriptionForDisctountPrice = items.map(function (item) { return "".concat(item.type, " ").concat(item.model, " special price only: ").concat(0.9 * item.price); });
console.log(descriptionForDisctountPrice);
