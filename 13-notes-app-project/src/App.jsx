
const App = () => {
  return (
    <div className="bg-black text-white h-screen">

      <form className="flex items-start justify-between p-10" >
        <div  className="flex flex-col gap-4 items-start w-[40%] font-medium" >
          
          <input type="text" 
          placeholder="Enter Notes Heading" 
          className="px-5 py-5 border-2 rounded w-full outline-none"/>
          

          <textarea type="text" 
          placeholder="Write Details" 
          className="px-5 py-5 border-2 h-35 rounded w-full outline-none"/>

          <button className="px-5 py-5 border-2 rounded bg-white text-black font-bold w-full outline-none">
            Add note
          </button>
        </div>
      </form>


    </div>
  )
}

export default App
