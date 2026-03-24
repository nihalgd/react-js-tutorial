

const Home = () => {
  return (
    <div className="home">

      {/* Background Blobs */}
      <div className="blob blue"></div>
      <div className="blob purple"></div>

      <div className="content">

        <p className="tag">
          🚀 Trusted by developers worldwide
        </p>

        <h1>
          Build Digital <br />
          <span>Experiences</span>
        </h1>

        <p className="desc">
          We craft high-performance web apps with modern technologies,
          stunning UI, and seamless user experience.
        </p>

        <div className="buttons">
          <button className="primary">Get Started</button>
          <button className="secondary">View Projects</button>
        </div>

        <div className="stats">
          <div>
            <h2>50+</h2>
            <p>Projects</p>
          </div>
          <div>
            <h2>100%</h2>
            <p>Client Satisfaction</p>
          </div>
          <div>
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;