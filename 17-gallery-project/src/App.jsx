import axios from 'axios'


const App = () => {

  const data = async ()=>{
  const getData = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
  console.log(getData);
  }
  return (
    <div className="h-screen bg-black text-white">

      <button onClick={data} className="bg-black text-white p-5 m-10 border-4">Get Data!</button>
    </div>
  )
}

export default App