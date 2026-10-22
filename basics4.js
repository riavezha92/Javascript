function add(a,b)
{
    return a+b;
}
let sum = add(2,3);
console.log(sum);

//anonymous methods

//assigned function to a variable

let sumofintegers = function(c,d)
{
    return c+d;
}
console.log(sumofintegers(2,3));

let sumofnumbers = (c,d)=> c+d;
console.log(sumofnumbers(2,3));