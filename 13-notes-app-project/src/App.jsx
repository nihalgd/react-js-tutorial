import { useState } from "react";

const App = () => {

  const [title, setfirst] = useState('')
  const [details, setsecond] = useState('')

  const [task, first] = useState([])
  

  const handler = (e)=>{
    e.preventDefault();

    const copyTask = [...task]
    copyTask.push({title,details})
    first(copyTask);
    console.log(copyTask);
    
      
    setfirst('')
    setsecond('')
  }

  return (
    <div className="bg-black text-white h-full lg:flex p-10 ">

      <form onSubmit={(e)=>{
        handler(e);
      }} className="flex flex-col gap-4 items-start font-medium lg:w-1/2" >
    
          <input type="text" 
          placeholder="Enter Notes Heading" 
          className="px-5 py-5 border-2 rounded w-full outline-none"
          value={title}
          onChange={(e)=>{
          setfirst(e.target.value);
          }}
          />
          
          <textarea type="text" 
          placeholder="Write Details here" 
          className="px-5 py-5 border-2 h-35 rounded w-full outline-none"
          value={details}
          onChange={(e)=>{
            setsecond(e.target.value)
          }}


          />

          <button className="px-5 py-5 border-2 rounded bg-white text-black font-bold w-full outline-none">
            Add note
          </button>

      </form>
      
      <div className="pl-10 not-lg:pt-8 lg:w-1/2">
        <h1 className="text-4xl font-bold mb-5">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start gap-5 overflow-auto h-full">
          {task.map(function(elem,idx){
            return <div key={idx}
            className="container h-52 w-35 rounded-2xl bg-white text-black p-4 ">
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-2 leading-tight font-medium text-gray-700">{elem.details}</p>
            </div>
          })}
        </div> 
      </div>
    </div>
  )
}

export default App

