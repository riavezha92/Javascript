//scope chain in JS- it is a mechanism JS uses to find the variable when it is accessesd inside a function or block

let a = 10;
let x = 10;
function outer()
{
    let b = 20;
    //let x = 20;
    function inner ()
    {
        let c = 30;
        //let x = 30;
        console.log(a); //golbal scope
        console.log(b); //outer scope
        console.log(c); // inner scope
        console.log(x);
    }
    inner()
}
outer()