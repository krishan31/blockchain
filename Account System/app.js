const Bank = require("./Bank");
const user1 = "Krishan Arora";
const user2 = "John";

Bank.createAccount(user1);
Bank.createAccount(user2);
Bank.credit(user1, 100);
Bank.debit(user1, 50);
Bank.credit(user2, 100);
Bank.debit(user2, 50);
console.log(Bank.getFunds(user1));
console.log(Bank.getFunds(user2));
console.log(Bank._accounts);