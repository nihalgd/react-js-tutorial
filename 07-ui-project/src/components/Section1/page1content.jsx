import Leftcontent from "./leftcontent"
import Rightcontent from "./rightcontent"

const page1content = (props) => {
 
  return (
    <div className="py-3 px-20 h-[90vh] flex gap-10" >
        <Leftcontent/>
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default page1content