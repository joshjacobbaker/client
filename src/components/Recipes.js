import { useState } from "react"

const obj = { a: "a", b: "b", c: "c", d: "d" }
const newObj = { ...obj, c: "charlie" }
console.log(newObj)

import React from "react"

const Recipes = (props) => {
  const [state, setState] = useState(0)
  console.log(typeof parseInt(props.number))
  return (
    <div>
      <p style={{ fontSize: "20px" }}>{state}</p>
      <button onClick={() => setState((prev) => prev + 1)}>Click Add 1</button>
      <button onClick={() => setState((prev) => prev - 1)}>Click Subtract 1</button>
    </div>
  )
}

export default Recipes
