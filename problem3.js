function prim(num) {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      console.log("not prime")
      return
    }
  }
  console.log("it is prime")
  return
}
num = prompt("please enter your number")
console.log(prim(num))
// good but can be better
