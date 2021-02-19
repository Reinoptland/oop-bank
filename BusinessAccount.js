const Account = require("./Account");

class BusinessAccount extends Account {
  constructor(name, balance, creditLimit, sepaPermission) {
    super(name, balance, creditLimit);
    this.sepaPermission = sepaPermission;
  }

  makeWithdrawal(amount) {
    if (amount < this.balance + this.creditLimit && amount < 20000) {
      this.balance = this.balance - amount;
    }
  }

  sepaInvoice(amount) {
    if (amount > 0 && this.sepaPermission === true) {
      const amountMinusTransactionCosts = amount * 0.99;
      this.balance = this.balance + amountMinusTransactionCosts;
    }
  }
}

module.exports = BusinessAccount;
