import React from 'react'

const card = (props) => {
    console.log(props);
  return (
     <div className='parent'>
      <div className='card'>
        <img src= {props.img}/>
        <h1>{props.user} , {props.dep}</h1>
        <p>{props.p}</p>
        <br></br>
        <button>view profile</button>
      </div>
    </div>
  )
}

export default card