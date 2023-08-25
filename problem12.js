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
     
}).then(alert).catch(console.error);


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
     
}).then(alert).catch(console.error);
//////////////////////////////////////////
async/await

async function m(){
    let p1=await new Promise((s,f)=>{
        setTimeout(() => {
         x= prompt("please enter your gpa (1)");
        
            if(x>3){
                s("good");
             }
             else{
                f("ahbl");
             }
         },3000);
         
    }).then(alert).catch(console.error);
    
    
    let p2=await new Promise((s,f)=>{
        setTimeout(() => {
         x= prompt("please enter your gpa (2)");
        
            if(x>3){
                s("good");
             }
             else{
                f("ahbl");
             }
         },1000);
         
    }).then(alert).catch(console.error);

};

m();
// need more information i can't understand this 😭