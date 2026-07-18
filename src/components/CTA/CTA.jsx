import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="container">

        <div className="cta-card">

          <span className="section-tag">
            Early Access
          </span>

          <h2>
            Ready to Build
            <span className="gradient-text"> Websites with AI?</span>
          </h2>

          <p>
            Join the waitlist today and be among the first creators,
            freelancers, and businesses to experience Algoritus.
          </p>

          <button
  className="cta-button"
  onClick={() =>
    document.getElementById("waitlist")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Join the Waitlist
</button>
        </div>

      </div>
    </section>
  );
}

export default CTA;