const Projects = () => {
  const projects = [
    {
      title: "To-Do App",
      desc: "Task management app with add, delete, and update features.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/nihalgd/To-do-App",
      image: "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Spotify Clone",
      desc: "Spotify inspired UI with responsive design.",
      tech: "HTML, CSS, JS",
      link: "https://github.com/nihalgd/spotify-clone",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Frontend Project",
      desc: "Modern React + Tailwind frontend project.",
      tech: "React, Tailwind",
      link: "https://github.com/nihalgd/frontend",
      image: "https://plus.unsplash.com/premium_photo-1721080251127-76315300cc5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="min-h-screen from-gray-900 via-black to-gray-900 text-white px-6 py-20">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div 
            key={index}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
          >
            
            {/* Image */}
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
              
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-2">
                {project.desc}
              </p>

              <p className="text-purple-400 text-xs mb-3">
                {project.tech}
              </p>

              <a 
                href={project.link}
                target="_blank"
                className=" from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
              >
                View Code
              </a>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;