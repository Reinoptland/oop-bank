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

  makeWithdrawal(amount) {}
}

module.exports = BusinessAccount;
