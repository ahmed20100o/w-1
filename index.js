 //assig 1
 //[Ahmed rayan  - node js c 45 sat & tues 3pm  - alex - w1 - 01200637472 - ahmedrayaneidmh@gmail.com]
 
 Q1
 let x = "123"
 let y = Number ("123")
 console.log(y+7);
 /////////////////////////
//Q2 

function ahmed(value) {
  return value ? value : "Invalid";
}
console.log(ahmed(0));

////////////////////
// Q3
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue
  }
  console.log(i);
}
console.log(10);
//////////////////////////////
// Q4
function ahmed (arr) {
  return arr.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5];
const even= ahmed (numbers);

console.log(even);
//////////////////////////////////////////////
//Q5
function m(A1 , A2) {
    return [...A1 , ...A2]
}
let  A1 = [1 , 2 , 3] 
let A2 = [4, 5 , 6]
let ma = m(A1, A2);
console.log(ma)
/////////////////////////////////////////
//Q6
function week(daynumber) {
    let daysname;

    switch(daynumber) {
        case 1:
            daysname = "Sun";
            break;
        case 2:
            daysname = "Mon";
            break;
        case 3:
            daysname = "Tue";
            break;
        case 4:
            daysname = "Wedn";
            break;
        case 5:
            daysname = "Thur";
            break;
        case 6:
            daysname = "Fri"
            break;
        case 7:
            daysname = "Sat";
            break;
       default:
 daysname = "";
    }
    return daysname;
}

console.log(week(2)); 
////////////////////////////////////////////
// Q7 

     let strings = ["a",  "ab",     "abc"];

let leng = strings.map(function(str)
 {
    return str.length;
      }
);
console.log(leng); 
///////////////////////////////////////////////////
//Q8
function hi(num) {
    if (num % 3 === 0 && num % 5 === 0) 
        {
      
            return "divisible by both";
    } else if (num%3===0) {
        
        return "divisible by 3 only";
    } else if (num%5===0) {
        return "divisible by 5 only";


    } else {
        return "Not divisible by 3 or 5";
    }
}
console.log(hi(15)); 
/////////////////////////
//Q9
let square = (num) => num * num;
console.log(square(5));
/////////////////////////////
//q10
function x(person) {
    let { name, age } = person; 
    return(  "  john is  years old 25");
}
 person={ name: 'John', age: 25 };
console.log(x(person));
///////////////////////////////////////////////////////
// q11
function x(...num) {
    let sum = 0; 
    for (let i = 0; i < num.length; i++) {
        sum += num [i]; 
    }
    return sum; 
}


console.log(x(1, 2, 3, 4, 5));
////////////////////////////////////////////////
//Q12
function Success() {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve("Success");
        }, 3000) 
    });
}
Success().then(message => console.log(message));
/////////////////////////////////////////////////////

//Q13
function x(arr) {
    if (arr.length === 0) ; 
    let y = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > y) 
            {
            y = arr[i];
        }
    }
    return y;
}
console.log(x([1, 3, 7, 2, 4]));
///////////////////////////////////////////////////////////
//q14
function ahmed(obj) {
    return Object.keys(obj);
}
console.log(ahmed(person));
////////////////////////////////////////////
//q15
        

