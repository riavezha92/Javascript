let day = "Tuesday";
console.log(day.length);

let subday = day.slice(0,4);
console.log(subday);
console.log(day[1]);

let splitday = day.split("s");
console.log(splitday[0]);
console.log(splitday[1]);

let days = "Tuesday's magic";
let splitsday = days.split("s");
console.log(splitsday[0]);
console.log(splitsday[1]);
console.log(splitsday[2]);

let dayss = "Tuesday's magic";

// Method 2: Using indexOf and substring
let index = dayss.indexOf("s");
console.log(dayss.substring(0, index));      // "Tue"
console.log(dayss.substring(index + 1));     // "day's magic"

let date = '23';
let nextdate = '27';
let difference = parseInt(nextdate)-parseInt(date);
console.log(difference);

//find index of day

day = 'Tuesday';
let newquote = day+" is Funday";
console.log(newquote);
let val = newquote.indexOf("day");
console.log(val);

//find the count of index 
let count = 0;
let value = newquote.indexOf("day",5);
console.log(value);
while(val !== -1)
    {
        count ++;
        val = newquote.indexOf("daya",val+1)

}

console.log(val);
console.log(count);