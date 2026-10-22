const Person = require("./basics7");

class Pet extends Person
{
/*get location ()
{
    return "USA";
} */
constructor (firstname,lastname)
{
    super(firstname,lastname)
}
}
let pet = new Pet("sam", "san");
pet.fullname();
console.log(pet.location);

