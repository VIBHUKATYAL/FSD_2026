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
    age:31;
}

