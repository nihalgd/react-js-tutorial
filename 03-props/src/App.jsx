import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user = "NIHAL" p = "Nihal is an AI & Machine Learning student who enjoys building modern web applications and exploring new technologies." dep = "AIML" img ="https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user = "GOURAV" p = "Gourav is a Computer Science student passionate about coding, software development, and solving real-world problems." dep = " CSE" img = "https://images.unsplash.com/photo-1575037631567-bb45cf5c5ae4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
      <Card user = "LUCKY" p = "Lucky studies Business Administration and is interested in entrepreneurship, management, and leadership." dep = "BBA" img = "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
      <Card user = "ARYAN" p = "Aryan is a Civil Engineering student who focuses on infrastructure design and construction technologies." dep = "CE" img = "https://images.unsplash.com/photo-1561402188-4e8acba147a0?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
      <Card user = "GOVIND" p = "Govind is a law student dedicated to learning about justice, legal systems, and public policy." dep = "LLB" img = "https://media.istockphoto.com/id/455257149/photo/black-and-white-portrait-of-a-man.jpg?s=2048x2048&w=is&k=20&c=8qYBNWhLPNcNC66rwaFha1at1bDSmqTT_6gWlZxuX6k="  />
      <Card user = "SAMMER" p = "Sammer is a Computer Science student interested in programming, web development, and innovative tech solutions." dep = "CSE" img = "https://images.unsplash.com/photo-1603725005889-49358f618a92?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

    </div>
  )
}

export default App