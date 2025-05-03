// Calculator

const calculate =(a,b,operation)=>{
    if(operation==="+"){
     return a+b
    }else if(operation==="-"){
     return a-b
    }else if(operation==="*"){
     return a*b
    }else if(operation === "/"){
     return a/b
    }
 }
 
const result = calculate(1,2,"/")
console.log("The result is", result)