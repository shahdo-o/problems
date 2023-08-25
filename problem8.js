function anagrams(x,y)
{
    if(x.length === y.length)
    {
            for (let index = 0; index < x.length; index++)
            {
                if(! x.includes(y[index]))
                {
                    console.error(" it's not anagrams");
                    return;
                };
            }
            console.log(" it's anagrams");
    } 
    else{
       console.error("length it's not same");
       }
};
x=prompt("please enter your string (1)");
y=prompt("please enter your string (2)");
anagrams(x,y);