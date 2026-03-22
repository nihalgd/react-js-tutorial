import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

         
          <h1 className="text-xl font-bold">MyApp</h1>

         
          <div className="flex space-x-6">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/projects'>Project</Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;