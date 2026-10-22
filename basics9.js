//Polymorphism - oops concept; allows same method behaves differently
class Animal
{
    speak()
    {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal
{
    speak()
    {
        console.log("Dog barks");
    }
}

class Cat extends Animal
{
    speak()
    {
        console.log("cat meows");
    }
}

const animals = [new Dog(),new Cat(),new Animal()];
animals.forEach(animal=>animal.speak());

//another example

class Car 
{
    move()
    {
        console.log("car is being driven");
    }
}

class Bird 
{
    move()
    {
        console.log("Bird is flying");
    }
}

function startMoving(vehicle)
{
    vehicle.move();
}
startMoving(new Car());
startMoving(new Bird());