

//Encapsulation keeps the data protected and provide controlled ways to access or modify it
class BankAccount
{
    #balance = 0;
    deposit(amount)
    {
        if(amount >0)
        {
            this.#balance += amount
        }
    }
    getBalance()
    {
        return this.#balance;
    }
}
const account = new BankAccount();
account.deposit(5000);
console.log(account.getBalance());

//Encapsulation protects or bundles data and controls acccess
//Abstraction hides complex implementation details
//Inheritance allows one class to inherit from another class
//Polymorphism same method or interface can have different behavior