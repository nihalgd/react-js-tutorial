import { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "Nihal", age: 20 });

  const btn = () => {
    setNum(prev => ({
      ...prev,
      user: "Gourav",
      age: 21
    }));
  };

  return (
    <div>
      <h1>{num.user} , {num.age}</h1>
      <button onClick={btn}>Click</button>
    </div>
  );
};

export default App;

  // const [num, setfirst] = useState({user : "Nihal" , age : 20})
  // const btn =()=> {
  //   const newNum = {...num}
  //   newNum.user = 'Gourav'
  //   newNum.age = 21
  //   console.log(newNum);
  //   setfirst(newNum)

  /* 
      <h1>{num.user} , {num.age}</h1>
      <button onClick={btn}>click</button> */