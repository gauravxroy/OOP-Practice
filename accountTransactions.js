const password = "1234@abc";
class BankAccount {
  // private instance varible // object level varible
  #balance = 0.0;
  #password = password;

  getBalance() {
    return this.#balance;
  }
  getPassword() {}
  depositeBalance(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return this.#balance;
    }
  }
  withdrawBalance(amount) {
    if (amount <= this.#balance && amount >= 100) {
      this.#balance -= amount;
      return this.#balance;
    } else {
      throw new Error("Insufficient Balance");
    }
  }
  sendMoney() {}
}

const account = new BankAccount(); //object for BankAccount
const balance = document.querySelector("#account-balance");
const form = document.querySelector("#transaction-form");
const amount = document.querySelector("#amount");
const transaction = document.querySelector("#transaction-type");

transaction.addEventListener("change", (e) => {
  const transactionType = e.target.value;
  console.log(transactionType);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const amountRs = parseFloat(amount.value);
  console.log(amount.value);
  if (transaction.value === "deposit") {
    account.depositeBalance(amountRs);
  } else {
    try {
      account.withdrawBalance(amountRs);
    } catch (err) {
      console.error(err.message);
    }
  }

  balance.innerHTML = `$${account.getBalance()}`;
});
