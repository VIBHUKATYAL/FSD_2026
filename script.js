console.log("Script loaded successfully.");
console.warn("This is a warning message.");
console.error("This is an error message.");
console.info("This is an informational message.");
let a=10.12;
let b=20;
let t=true;
var c=30;
var d=40
var c=d;
console.log(typeof a);
console.log(typeof t);
const e=50;
console.log("Values"+(c+a));
for(let i=0;i<5;i++){
    console.log(i);
}
if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("b is greater than a");
}
//Array

let arr=[10,20,30,40,50];
console.log(arr[0]);
arr.push(60);
console.log(arr);
arr.pop();
console.log(arr);

//Object

let student={
    name:"John",
    age:31
}
console.log(student.name);
console.log(student.age);
student.age=32;
console.log(student.age);

//Function
function add(x,y){
    return x+y;
}
console.log(add(10,20));

//Arrow Function
const multiply=(x,y)=>x*y;
console.log("Arrow Function:",multiply(5,10));

//date

let today=new Date();
console.log(today);

//math
console.log(Math.sqrt(16));
console.log(Math.pow(2,3));
console.log(Math.random());

//String
txt="Hello World";
console.log(txt.length);
console.log(txt.toUpperCase());
console.log(txt.includes("html"));

//TypeConversion

let strnum="1021";
let convert=Number(strnum);
console.log(convert+10);

