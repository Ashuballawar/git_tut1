var obj={
    num:2,
    name:"Ashu"
};
var obj1={num:5};
var addtothis=function(a,b,c){
    return this.num+a+b+c;
}
//console.log(addtothis(3));
// console.log(addtothis.call(obj,3,2,3));
// let arr=[1,23,4];
// console.log(addtothis.apply(obj,arr));
// var bound=addtothis.bind(obj);
// // console.log(bound);
// // console.dir(bound); 
// console.log(bound(1,2,4));
// let student={
//     age:20,
// };

// function age_student(){
//     console.log(this.age);
// }

// age_student.call(student);


let multiply=function(x,y){
    console.log(x*y);
}

let multiplyby2=multiply.bind(this,2);
multiplyby2(3,12);
let addition=function(x){
    return function(y){
        console.log(x+y);
    }
}
let add2=addition(3);
add2(2);