t=prompt("enter your Email");
function reg(t){
 let l= /(https?:\/\/)?(www.)?ma5louf.(com|org)(:8080\/art.php\?id=1111cat=top)?/ig;
 return l.test(t);
};

console.log(reg(t));
