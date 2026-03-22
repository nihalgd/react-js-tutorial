import Nav from './components/nav'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/' element = {<About/>}/>
        <Route path='/' element = {<Contact/>}/>
        <Route path='/' element = {<Services/>}/>
      </Routes>
    </div>
  )
}

export default App