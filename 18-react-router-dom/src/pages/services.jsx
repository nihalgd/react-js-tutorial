const Services = () => {
  return (
    <section className="min-h-screen from-gray-900 via-black to-gray-900 text-white px-6 py-20">
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white/5 p-6 rounded-xl backdrop-blur hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-gray-400">
            We build fast, responsive, and scalable websites using modern tech.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 p-6 rounded-xl backdrop-blur hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
          <p className="text-gray-400">
            Clean and modern UI designs focused on user experience.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 p-6 rounded-xl backdrop-blur hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">App Development</h3>
          <p className="text-gray-400">
            Mobile-friendly and high-performance applications.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;