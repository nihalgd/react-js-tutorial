import Nav from './components/nav'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
import Projects from './pages/project'
import Notfound from './pages/notfound'
import Details from './pages/details'

import { Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/services' element = {<Services/>}/> 
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/:id' element = {<Details/>} />

      <Route path='*' element = {<Notfound/>}/>
      </Routes>
     
    </div>
  )
}

export default App