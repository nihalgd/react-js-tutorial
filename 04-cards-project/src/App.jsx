import Card from "./components/card"


const App = () => {
  const jobOpenings = [
  {
    logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    company: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    company: "Amazon",
    datePosted: "1 day ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Patna, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFV7FQFfNAbjlN-ZfWWK-MD6ZSYNQ_qRODg&s",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "kerala, India"
  },
  {
    logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    company: "Netflix",
    datePosted: "6 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Indore, India"
  },
  {
    logo: "https://cdn.dribbble.com/userupload/29828185/file/original-5bcab5b55efba8f8486479f1d72a3106.png",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Bhopal, India"
  },
  {
    logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    company: "Google",
    datePosted: "7 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Dehradun, India"
  },
  {
    logo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    company: "Amazon",
    datePosted: "2 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    company: "Meta",
    datePosted: "8 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Chennai, India"
  },
  {
    logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Punjab, India"
  }
];
console.log(jobOpenings);
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem,card){

        return <div key ={card}>
          <Card logo={elem.logo} company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          </div>
      })}


    </div>
  )
}

export default App