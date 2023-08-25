function prim(num){
    
    for (let index = 2; index <= Math.sqrt(num) ; index++)
     {
       if( num%index == 0) { return "not prime"   }
     }
     return "it is prime" 
}
num=prompt("please enter your number")
console.log(prim(num))
