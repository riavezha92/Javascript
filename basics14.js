//closures allows teh function sto remember variables which existed when it was created. A closure in JS is created when an inner fn remembers and can access teh variables from outer functions scope even after the outer function has finished executing
function outer()
{
    let messages = "hello";
    function inner()
    {
        console.log(messages);
    }
    return inner;
}
const result = outer();
result();

function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = bankAccount();
console.log(account.getBalance());      // ✅ 1000
console.log(account.deposit(500));      // ✅ 1500
console.log(account.balance);           // undefined (balance is private) balance cannot be accessed directly through account.balance,it can be accessed only though methids
