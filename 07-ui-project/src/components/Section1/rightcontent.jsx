import Rightcard from "./rightcard"

const Rightcontent = (props) => {
  console.log(props.users);

  return (
    <div id="vixen" className="h-full w-[80%] p-10 flex gap-10 flex-nowrap overflow-auto">
      {props.users.map(function(elem,idx){
        return <Rightcard key={idx} id={idx} img={elem.img} text={elem.text} button={elem.button}/> 
      })}
    </div>
  )
}

export default Rightcontent
