// Export your class here as module.exports = MyClass
class Account {
  constructor(name, balance, creditLimit) {
    this.name = name;
    this.balance = balance;
    this.creditLimit = creditLimit;
  }

  makeDeposit() {}
}

module.exports = Account;
