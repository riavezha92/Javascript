//object is a collection of properties and funtions
let person = {
    firstname:'Tim',
    lastname:'Joe',
    age:24,
    fullname:function()
    {
        console.log(this.firstname+" " +this.lastname)
    }
}
person.fullname();
console.log(person.lastname);
console.log(person['lastname']);
console.log(person.firstname)
person.firstname = "Tim Dane"
console.log(person.firstname)

//add new attribute to object

person.gender = "male";

//printing the complete object

console.log(person)

//verifying that the person object has attribute gender in it
console.log('gender' in person) 

delete person.gender
console.log('gender' in person) 

for (let key in person)
{
    console.log(person[key])
}
