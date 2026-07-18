import "./About.css";
import { Sparkles, LayoutTemplate, Rocket } from "lucide-react";

const features = [
  {
    icon: <Sparkles size={28} />,
    title: "AI Website Generation",
    description:
      "Generate complete, modern websites in minutes using AI-powered prompts."
  },
  {
    icon: <LayoutTemplate size={28} />,
    title: "Beautiful Templates",
    description:
      "Start with professionally designed layouts that are responsive and customizable."
  },
  {
    icon: <Rocket size={28} />,
    title: "One-Click Publishing",
    description:
      "Publish your website instantly and get online without complicated setup."
  }
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <span className="section-tag">Why Algoritus?</span>

          <h2>
            Build smarter.
            <br />
            Launch faster.
          </h2>

          <p>
            Algoritus is building an AI-powered platform that helps businesses,
            freelancers, creators, and agencies build stunning websites without
            wasting weeks on design and development.
          </p>
        </div>

        <div className="about-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;