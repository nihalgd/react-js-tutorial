import Leftcontent from "./leftcontent"
import Rightcontent from "./rightcontent"

const page1content = () => {
  return (
    <div className="py-3 px-20 h-[90vh] flex gap-10" >
        <Leftcontent/>
        <Rightcontent/>
    </div>
  )
}

export default page1content