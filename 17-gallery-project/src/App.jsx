import axios from 'axios'
import { useEffect, useState } from 'react'


const App = () => {
  

  const [Userdata, setUserdata] = useState([])

  const data = async ()=>{
  const responce = await axios.get('https://picsum.photos/v2/list?page=12')
  setUserdata(responce.data);
  console.log(responce.data);
  }

  useEffect(function(){
    data()
  })

   let printUserData = "No User Available!"
    if(Userdata.length>0){
    printUserData = Userdata.map(function(elem,idx){

      return <div key={idx}>
        <a href={elem.download_url} target='_blank'>
        <div className='h-40 w-44 bg-amber-50 rounded-xl m-5'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="image not Avaliable" />
        <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
      </a>
      </div>
    })
  }
  
  return (

    <div className="h-screen bg-black text-white overflow-auto">
      {/* <button onClick={data} className="bg-black text-white p-5 m-10 border-4 cursor-pointer">Get Data!</button> */}
      <div className='flex flex-wrap gap-5'>
          {printUserData}
        </div>
        <div className='flex justify-center items-center gap-6 p-4 mt-5'>
          <button className='bg-amber-400 cursor-pointer text-black rounded px-4 py-2 font-bold'>Prev</button>
          <button className='bg-amber-400 cursor-pointer text-black rounded px-4 py-2 font-bold'>Next</button>
        </div>
    </div>
  )
}

export default App