import { useState } from 'react'

const App = () => {

        const [kitna, setfirst] = useState("?")
  const [kitnaa, set] = useState("0")
  function dek (){
    setfirst("02")

  }
  function inc(){
    set(kitnaa + 1)
  }
   function dec(){
    set(kitnaa - 1)
  }
   function plus(){
    set(kitnaa + 5)
  }

  return (
    <div>
      <h1> 1 + 1 = {kitna} </h1>
      <button onClick={dek}>calculate</button>

      <div>
        <h2>{kitnaa}</h2>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={plus}>+5</button>
      </div>
    </div>
  )
}

export default App

      

