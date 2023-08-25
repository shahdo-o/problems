    function factorial(num){
        n=1;
        for(i=1;i<=num;i++){
            n *=i;
        }
    return n;
    };
    num=prompt("please enter your number");
    console.log(factorial(num));