

const nav1 = (props) => {
  return (
    <div className="flex gap-5 pl-20 pr-2">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Contacts</h4>
        <h4>{props.theme}</h4>
    </div>
  )
}

export default nav1