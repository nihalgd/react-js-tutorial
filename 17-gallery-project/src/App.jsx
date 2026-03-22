import axios from 'axios'
import { useState } from 'react'


const App = () => {
  const arr = [{},{},{}]

  const [Userdata, setUserdata] = useState([])

  const data = async ()=>{
  const responce = await axios.get('https://picsum.photos/v2/list?page=2')
  setUserdata(responce.data);
  console.log(responce.data);
  
  }
  return (

    <div className="h-screen bg-black text-white">

      <button onClick={data} className="bg-black text-white p-5 m-10 border-4">Get Data!</button>

    </div>
  )
}

export default App