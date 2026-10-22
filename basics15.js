//This inside an object

const student = {
    name:"Arun",
    age:21,
    display:function()
    {
        console.log(this.name);
        console.log(this.age);
    }
}
student.display()

//This inside a constructir funtion
function Employee(name,salary)
{
    this.name= name
    this.salary=salary
}
const emp1 = new Employee("Anu",40000)
const emp2 = new Employee("Ravi",50000)
console.log(emp1.name)
console.log(emp2.salary)

//this inside a class

class Student 
{
    constructor(name)
    {
        this.name = name
    }
    display()
    {
        console.log(this.name)
    }
}
const s1 = new Student("Anu")
s1.display()