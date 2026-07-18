import "./SocialProof.css";

function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">

        <span className="section-tag">
          Trusted by Early Builders
        </span>

        <h2>
          Join the first
          <span className="gradient-text"> 1,000 Builders</span>
        </h2>

        <p>
          Entrepreneurs, freelancers, creators, and agencies are joining
          Algoritus to build websites faster with AI.
        </p>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>1000+</h3>
            <span>Waitlist Goal</span>
          </div>

          <div className="stat-card">
            <h3>24/7</h3>
            <span>AI Website Generation</span>
          </div>

          <div className="stat-card">
            <h3>AI</h3>
            <span>Powered Automation</span>
          </div>

          <div className="stat-card">
            <h3>∞</h3>
            <span>Future Possibilities</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SocialProof;