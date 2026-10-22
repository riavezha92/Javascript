module.exports =  class Person //Class names startes with Capital letter
{
age = 25;
get location ()
    {
    return 'Canada';
    }
constructor(firstname,lastname)
    {
    this.firstname=firstname;
    this.lastname=lastname;
    }
fullname () 
    {
    console.log(this.firstname +" " + this.lastname);
    }
}

/* class is a collection of variables and functions. Class keyword is used to represent it. Object i srequired to call anything inside Class. We are using dfault constructor now.

let person = new Person ();
console.log(person.age);
console.log(person.location);
Get function can be called like variable , no simple bracket is required.
let person1 = new Person("Tim","Joseph");
person1.fullname();
let person2 = new Person("Chris","Johns");
person2.fullname();

Inheritance - we create subclass and we can override */

