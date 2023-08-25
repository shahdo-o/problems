    function days(str1,str2){
    date1= new Date(str1);
    date2=new Date(str2);
    avr  = (date1-date2)/1000/60/60/24;
    console.log(avr);
    };
    str1="1 ,10,1999";
    str2="1 ,10,1998";
    days(str1,str2);
    
    