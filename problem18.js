let l1 = "ma5louf.org" //tm
let l2 = "https://ma5louf.org" //tm
let l3 = "http://ma5louf.com" //tm
let l4 = "https://www.ma5louf.org" //tm
let l5 = "https://www.ma5louf.org:8080/art.php?id=1111cat=top"
let re =
  /(https?:\/\/)?(www.)?ma5louf.(com|org)(:8080\/art.php\?id=1111cat=top)?/gi
// this is valid and good for links but i wanted rgx for email :" good work
console.log(re.test(l1))
console.log(l2.match(re))
console.log(l3.match(re))
console.log(l4.match(re))
console.log(l5.match(re))
// use test instead of match
