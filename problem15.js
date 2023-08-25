l=5;//5*4*3*2
function rec(l)
{
    
  if(l===1){
    return 1;
  }
  else{
    return (l*rec(l-1));
  }

};



console.log(rec(l));