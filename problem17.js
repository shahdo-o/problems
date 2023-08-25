let p1= new Promise((s,f)=>{
    setTimeout(() => {
     x= prompt("please enter your gpa (1)");
    
        if(x>3){
            s("good");
         }
         else{
            f("ahbl");
         }
     },3000);
     
})


let p2= new Promise((s,f)=>{
    setTimeout(() => {
     x= prompt("please enter your gpa (2)");
    
        if(x>3){
            s("good");
         }
         else{
            f("ahbl");
         }
     },1000);
     
});
Promise.all([p1,p2]).then(alert).catch(console.error);


