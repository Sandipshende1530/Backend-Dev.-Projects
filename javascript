 program-1
n=10
for (i=1;i<=n;i++)
{ 
if(i%3&&5==0) {
    console.log(FizzBuzz)
}
   else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
    console.log("Buzz")
    }
 }





    
Program-2 function expression
function calcAddition(number1,number2){
    return number1+number2;
}
console.log(calcAddition(6,9))



  

program fuction 
  const square=function(number){
    return number*number;
}
const x=square(4);
console.log(x)

 
  
  
  program : rest parameter
  const sum=(...numbers)=>{
    let total=0;
    for(let num of numbers){
        total+=num;
    }
    return total;
};
console.log(sum(1,2,3));
console.log(sum(4,5,6,7));




program:callback function

  function greet(name,callback){
    console.log(`Hello,${name}!`);
    callback();
}
function saygoodbye(){
    console.log('goodbye!');

}
greet('Alice',saygoodbye);


program:object literals

const person={
    firstName:'john',
    lastname:'doe',
    age:'30',
    isEmployed:true,
    greet:function(){
        console.log("hello");
        
    }
};
console.log(person.firstName)


program= 
const person={
    firstName:'john',
    lastname:'doe',
    age:'30',
    isEmployed:true,
    greet:function(){
        console.log("hello");
        
    }
};
for(let x in person){
    console.log(`${x}: ${person[x]}`)
    console.log(x)
}
 




  
