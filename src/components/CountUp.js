import React, { useState } from 'react'

export default function CountUp() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => count < 10 ? setCount(count + 1) : setCount(0)} >{ count < 10 ? <h3>Add: {count}</h3> : <h3> Reset {count} </h3>}</button>
    </div>
  )
}
