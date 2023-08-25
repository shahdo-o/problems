let l1="ma5louf.org";//tm
let l2="https://ma5louf.org";//tm
let l3="http://ma5louf.com";//tm
let l4="https://www.ma5louf.org";//tm
let l5="https://www.ma5louf.org:8080/art.php?id=1111cat=top";
let l= /(https?:\/\/)?(www.)?ma5louf.(com|org)(:8080\/art.php\?id=1111cat=top)?/ig;
console.log(l1.match(l));
console.log(l2.match(l));
console.log(l3.match(l));
console.log(l4.match(l));
console.log(l5.match(l));
