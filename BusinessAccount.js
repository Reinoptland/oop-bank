// Export your class here as module.exports = MyClass
class BusinessAccount {
  constructor(name, balance, creditLimit, sepaPermission) {
    this.name = name;
    this.balance = balance;
    this.creditLimit = creditLimit;
    this.sepaPermission = sepaPermission;
  }

  makeDeposit(amount) {
    if (amount > 0) {
      this.balance = this.balance + amount;
    }
  }

  makeWithdrawal(amount) {
    if (amount < this.balance + this.creditLimit && amount < 20000) {
      this.balance = this.balance - amount;
    }
  }

  sepaInvoice(amount) {
    const amountMinusTransactionCosts = amount * 0.99;
    this.balance = this.balance + amountMinusTransactionCosts;
  }
}

module.exports = BusinessAccount;
