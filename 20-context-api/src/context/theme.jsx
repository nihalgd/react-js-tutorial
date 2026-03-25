import { createContext } from "react"
export const themeData = createContext()

const theme = (props) => {
  return (
    <div>
        <themeData.Provider value='nihal'>
            {props.children}
        </themeData.Provider>
    </div>
  )
}

export default theme