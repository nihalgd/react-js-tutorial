import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

  const getData = async () =>{
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log('here is the Data' , data);
    console.log('here is the Data' , data.data);

    setdata(data.data)
  }

  return (
    <div>

      <button onClick={getData}>GET DATA</button>
      <div>
        {data.map(function(elem,idx){
          return <h2>{idx}{elem.title}</h2>
        })}
      </div>
    </div>
  )
}

export default App




// async function getData () {
//    const dataDeko = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log('data aa gya bhiduu !!!!');
//     console.log('dek data' , dataDeko);   
//   }



  // const getData = async () =>{
  //   const dekData = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log('data aa gya bhiduu !!!!');
  //   console.log('yehh dekkoo data');

  //   const data = await dekData.json()
  //   console.log(data); 
  // }