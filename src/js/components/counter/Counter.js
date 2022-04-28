import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from "../../redux/features/counter/counterSlice"

import CounterStyled from "./CounterStyled"

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  return (
    <>
      <CounterStyled>
        <h2>Counter</h2>
        <input aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>IncrementByAmount</button>
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            +
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            -
          </button>
        </div>
        {/* omit additional rendering output here */}
      </CounterStyled>

      <CounterStyled>
        <h2>Counter</h2>
        <input aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>IncrementByAmount</button>
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            +
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            -
          </button>
        </div>
        {/* omit additional rendering output here */}
      </CounterStyled>
    </>
  )
}

export default Counter
