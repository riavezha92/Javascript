//Different ways of declaratiion of Arrays

var marks = Array(6);

//empty array which can store 6 data
//different types of declaration

var marks = new Array(20,40,35,10,27,100);
var marks = [20,40,35,10,27,100];

//Array position starts fom index 0
console.log(marks[2]);

marks [3] = 14;
console.log(marks);

//length of array
console.log(marks.length);

//adds an elemnt towards the end of array
marks.push(65);
console.log(marks);

//delete an element at the end

marks.pop();
console.log(marks);


//sum of elements in an array

var sum = 0;
for (let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
    sum = sum + marks[i];
}  
console.log("sum="+ sum);

//Reduce method to find sum of elements

let total = marks.reduce((sum,m)=> sum +m,0);
console.log(total)

//Reduce method to find average

let average = marks.reduce((avg,mark)=> avg+mark/marks.length,0);
console.log(average);

//We use reduce method to do calculations with elements inside array

//storing data based on some condition

let evenscores = [];
let scores = [12,13,14,16];
for(let i=0;i<scores.length;i++)
{
    if (scores[i]%2==0)
    {
        evenscores.push(scores[i])
    }
}
console.log(evenscores);

//filetering data based on some condition

let newfilterevenscores = scores.filter(score=>score%2==0);
console.log(newfilterevenscores);

//Mapping based on some value

let mapedarray = newfilterevenscores.map(score=>score*3);
console.log(mapedarray);


//find total of the mapped arraybusing reduce method
let totalvalue = mapedarray.reduce((sum,val)=>sum+val,0)
console.log(totalvalue);

//writing all these steps 

var scores1=[12,13,14,16];
let sumvalue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0);
console.log(sumvalue);

//string arrays

let fruits = ["banana","mango","apple"]
//write up either as all small letters or the first letter as Capital , this is beacuse sorting happens with ASCII code and it would be different for A and a

console.log(fruits.sort());
console.log(fruits.reverse());

let scores2 = [12,3,19,16,14];
console.log(scores2.sort());
//single digit did not sort properly, so it doesnt work in case of numbers

console.log(scores2.sort((a,b)=>a-b));

//kiro need explanation for this sorting

console.log(scores2.sort((a,b)=>b-a));

//kiro need explanation for this sorting