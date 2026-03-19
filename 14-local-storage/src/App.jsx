

const App = () => {
  localStorage.setItem('user' , 'nihal')
  localStorage.setItem('age' , '20')

  const user = localStorage.getItem('user')
  const age = localStorage.getItem('age')
  console.log(user,age);

  const bande = [{
    name : 'nihal',
    age : 21,
    dep : 'CS',
  },
  {
    name : 'niharika',
    age : 21,
    dep : 'AIML',
  },
  {
    name : 'gourav',
    age : 21,
    dep : 'CSE',
  }];

  // console.log(bande);
  localStorage.setItem("student" , JSON.stringify(bande));

  const bandeString = localStorage.getItem("student")
  const bandey = JSON.parse(bandeString);

  console.log(bandey);
  
  

  return (
    <div>App</div>
  )
}

export default App