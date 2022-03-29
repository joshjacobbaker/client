alert("Hello World")
require("./styles/main.css")
require("./index.html")
require("./images/dog.jpg")

const obj = { a: "a", b: "b", c: "c", d: "d" }
const newObj = { ...obj, c: "charlie" }
console.log(newObj)
console.log("just printed")
