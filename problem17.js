// const prompt = require("prompt-sync")({ sigint: true })

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     x = prompt("please enter your gpa (1)")

//     if (x > 3) {
//       resolve("good")
//     } else {
//       reject("ahbl")
//     }
//   }, 3000)
// })

// let p2 = new Promise((s, f) => {
//   setTimeout(() => {
//     x = prompt("please enter your gpa (2)")

//     if (x > 3) {
//       s("good")
//     } else {
//       f("ahbl")
//     }
//   }, 1000)
// })
// Promise.all([p1, p2]).then(console.log).catch(console.error)

const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
]

async function fetchConcurrentData(apiUrls) {
  const responses = await Promise.all(apiUrls.map((url) => fetch(url)))
  console.log(typeof responses)
  const data = await Promise.all(responses.map((response) => response.json()))
  console.log(typeof data)
  return data
}

console.log(fetchConcurrentData(apiUrls))
