import "./Benefits.css";
import { Rocket, BadgeDollarSign, BellRing, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <Rocket size={30} />,
    title: "Early Beta Access",
    desc: "Be among the first users to experience Algoritus before the public launch."
  },
  {
    icon: <BadgeDollarSign size={30} />,
    title: "Founder Pricing",
    desc: "Lock in exclusive pricing available only to early supporters."
  },
  {
    icon: <BellRing size={30} />,
    title: "Product Updates",
    desc: "Receive meaningful updates about new features and improvements."
  },
  {
    icon: <Sparkles size={30} />,
    title: "Shape the Future",
    desc: "Help us prioritize features with your feedback."
  }
];

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <h2>Why Join the Waitlist?</h2>

        <div className="benefits-grid">
          {benefits.map((item) => (
            <div className="benefit-card" key={item.title}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;