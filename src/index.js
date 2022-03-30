require("./styles/index.scss")
require("./images/dog.jpg")

const obj = { a: "a", b: "b", c: "c", d: "d" }
const newObj = { ...obj, c: "charlie" }
console.log(newObj)

if (module.hot) {
  module.hot.accept()
}
