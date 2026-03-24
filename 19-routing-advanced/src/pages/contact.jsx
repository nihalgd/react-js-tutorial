const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      <div className="max-w-3xl w-full">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 focus:outline-none"
          ></textarea>

          <button className="w-full  from-blue-500 to-purple-500 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;