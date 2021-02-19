const Account = require("./Account");

class BusinessAccount extends Account {
  constructor(name, balance, creditLimit, sepaPermission) {
    super(name, balance, creditLimit);
    // check Account.js to see how dailyLimit is used in makeWithdrawal
    this.dailyLimit = 20000;
    this.sepaPermission = sepaPermission;
  }

  sepaInvoice(amount) {
    if (amount > 0 && this.sepaPermission === true) {
      const amountMinusTransactionCosts = amount * 0.99;
      this.balance = this.balance + amountMinusTransactionCosts;
    }
  }
}

module.exports = BusinessAccount;
