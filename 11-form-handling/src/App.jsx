const App = () => {
  const form = (o) => {
    console.log("form is Sumbited!")
    o.preventDefault()
    
  }
  return (
    <div>
      <form onSubmit={ (o) => {
        form(o)
      }
      }>
        <input type="text" placeholder='Enter your Name' />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default App