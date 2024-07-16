#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var randomNumber = Math.floor(Math.random() * 6 + 1);
var answer = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk_1.default.blue("Guess a Number between (1-6) "),
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk_1.default.green("Congtratulation! You Win "));
}
else {
    console.log(chalk_1.default.red("You Guessed Wrong Number. You Loss"));
}
