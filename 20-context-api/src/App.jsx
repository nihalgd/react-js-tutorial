import { useState } from "react"
import Nav from "./assets/components/nav"

const App = () => {
  const [theme, settheme] = useState('light')
  return (
    <div className=" text-xl font-extrabold text-black">
      <Nav theme = {theme}/>
    </div>
  )
}

export default App