import { useContext } from "react"
import Nav1 from "./nav1"
import { themeData } from "../../context/theme"



const nav = (props) => {
    const data = useContext(themeData)
  return (
    <nav className="bg-amber-500 flex justify-between items-center pl-6 pr-6 h-15">
        <h1>{data}</h1>
        <Nav1 theme = {props.theme}/>
    </nav>
  )
}

export default nav