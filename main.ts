#! /usr/bin/env node

import inquirer from "inquirer"

let currencyRate: any = {
    "US Dollar" : 1,
    "Euro": 0.94,
    "Saudi Riyal": 3.75,
    "Turkish Lira": 32.36,
    "Pakistani Rupee": 280,
    "Indian Rupee": 74.57
}
let currency = []
for (const i in currencyRate) {
    currency.push(i)
}

let answer = await inquirer.prompt([{
    name: "from",
    message: "Choose the currency you want to convert from",
    type: "list",
    choices: currency
},
{
    name: "to",
    message: "Choose the currency you want to convert to",
    type: "list",
    choices: currency
},
{
    name: "amount",
    message: "Enter the amount: ",
    type: "number"
}
])

let fromCurrency = currencyRate[answer.from]
let toCurrency = currencyRate[answer.to]
let amount = answer.amount 
let baseCurrency = amount / fromCurrency
let finalAmount = baseCurrency * toCurrency
console.log(Math.floor(finalAmount))