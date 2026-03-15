const rightcard = (props) => {
  return (
    <div className='h-full w-70 rounded-4xl relative overflow-hidden shrink-0'> 
        <img className="h-full w-full object-cover" src={props.img}/> 
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">

            <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center font-semibold">{props.id+1}</h2>
            <p className="text-white text-sm font-medium pt-70 text-shadow-lg/30">{props.text}</p>
            
            <div className="flex justify-between">
                 <button className="text-white bg-blue-600 rounded-full h-12 w-28 font-medium">{props.button}</button>
                 <button className="text-white cursor-pointer  bg-blue-600 rounded-full h-12 w-12"><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default rightcard