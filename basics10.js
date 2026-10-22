//Oops concepts - Abstraction (Internal Implementation will be hidden)

class Car
{
    start()
    {
        this.#checkEngine();
        this.#injectFuel();
        console.log("car started");
    }
    #checkEngine()
    {
        console.log("checking engine")
    }
    #injectFuel()
    {
        console.log("Injecting fuel")
    }
}
const car = new Car();
car.start();

//example 2
class Atm
{
    withdraw(amount)
    {
        this.#verifyPin()
        this.#checkBalance()
        this.#dispenseCash(amount)
    }
    #verifyPin()
    {
        console.log("pin verified")
    }
    #checkBalance()
    {
        console.log("balance checked")
    }
    #dispenseCash(amount)
    {
        console.log(`dispensing ${amount} rupees`)
    }
}
const atm = new Atm();
atm.withdraw(5000);

//Encapsulation is used to provide 