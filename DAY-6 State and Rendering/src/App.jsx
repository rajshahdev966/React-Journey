import React, { useCallback, useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0);


  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Click to increase</button>
    </div>
  )
}

export default App
