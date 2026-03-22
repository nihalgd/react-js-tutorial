const Home = () => {
  return (
    <div className="min-h-screen  from-gray-900 via-black to-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute  bg-blue-500 opacity-20 blur-3xl rounded-full "></div>
      <div className="absolute  bg-purple-500 opacity-20 blur-3xl rounded-full "></div>

      <div className="text-center px-6 z-10">
        
        {/* Badge */}
        <p className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm mb-6 backdrop-blur">
          🚀 Trusted by developers worldwide
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Build Digital <br />
          <span className=" from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Experiences
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          We craft high-performance web apps with modern technologies,
          stunning UI, and seamless user experience.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button className=" from-blue-500 to-purple-500 px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-gray-500 px-6 py-3 rounded-lg text-lg hover:bg-white/10 transition">
            View Projects
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold">50+</h2>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">100%</h2>
            <p className="text-gray-400 text-sm">Client Satisfaction</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">24/7</h2>
            <p className="text-gray-400 text-sm">Support</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;