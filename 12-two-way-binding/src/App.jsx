import { useState } from "react"

const App = () => {
  const [title, setfirst] = useState('')
  const form = (o) => {
    console.log("form is Sumbited!" ,title)
    o.preventDefault()
  }
  return (
    <div>
      <form onSubmit={ (o) => {
        form(o)
      }
      }>
        <input type="text" 
        placeholder='Enter your Name'
        value={title}
        onChange={(e)=>{
          console.log("kuch na kuch toh lik rha haii yehh....");
          setfirst(e.target.value);
          
          
        }}
        />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default App