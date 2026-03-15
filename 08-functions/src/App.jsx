import React from 'react'

const App = () => {

  function input(elem){
    console.log(elem.target.value);
  }
  function page(elem){
    console.log("scrollinngg speedd . . . . ", elem.deltaY);
    
  }
  return (
    <div id='big' onWheel={page} onChange={input}>
      <input type="text" placeholder='Username' /> <br></br>
      <input type="password" placeholder='Password' /> <br></br>
<br></br>
      <button onClick={()=>
        console.log("Form is sumbited!")
      }>Submit</button>
    </div>
  )
}

export default App