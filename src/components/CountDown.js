import React, { useState } from 'react'


export default function CountDown() {
  const [count, setCount] = useState(10)
  return (
    <div>
      <button onClick={() => count > 0 ? setCount(count - 1) : setCount(10)}>{count}</button>
    </div>
  )
}
