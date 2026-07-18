import { useEffect, useState } from "react";
import "./Hero.css";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "../../lib/supabase";

function Hero() {
const pages = [
  "Homepage Generated",
  "Pricing Page",
  "Gallery Added",
  "Contact Form",
  "SEO Optimized",
  "Mobile Responsive"
];
const [waitlistCount, setWaitlistCount] = useState(0);
const displayCount = waitlistCount + 1025;

const [visiblePages, setVisiblePages] = useState([]);
const [progress, setProgress] = useState(0);
const [completed, setCompleted] = useState(false);

const [email, setEmail] = useState("");
const [whatsapp, setWhatsapp] = useState("");
useEffect(() => {
  let current = 0;

  const timer = setInterval(() => {
    if (current < pages.length) {
      setVisiblePages((prev) => [...prev, pages[current]]);
      setProgress(((current + 1) / pages.length) * 100);
      current++;
    } else {
      setCompleted(true);
      clearInterval(timer);
    }
  }, 700);

  return () => clearInterval(timer);
}, []);
useEffect(() => {
  const fetchCount = async () => {
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (!error) {
      setWaitlistCount(count || 0);
    }
  };

  fetchCount();
}, []);
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email.trim()) {
    alert("Please enter your email.");
    return;
  }

  try {
    const { error } = await supabase
      .from("waitlist")
      .insert([
        {
          email: email.trim(),
          whatsapp: whatsapp.trim() || null,
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      alert(error.message);
      return;
    }

      alert("Successfully joined the waitlist!");
      setWaitlistCount((prev) => prev + 1);

       setEmail("");
       setWhatsapp("");
  } catch (err) {
    console.error("Unexpected Error:", err);
    alert("Something went wrong. Please try again.");
  }
};
  return (
      <section id="waitlist" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="container hero-wrapper">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="hero-badge">
            <Sparkles size={16}/>
            Early Access Open
          </div>

          <h1>
            Build Websites
            <span className="gradient-text">
              {" "}at the Speed of Thought.
            </span>
          </h1>

          <div className="waitlist-count">
   <strong>{displayCount}+</strong> Founding Members
</div>
          <p>
            Describe your idea once.
            Algoritus generates a beautiful,
            responsive, SEO-ready website in minutes.

            Join early access and help shape
            the future of website creation.
          </p>

          <form
  className="hero-form"
  onSubmit={handleSubmit}
>
<input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

<input
  type="tel"
  placeholder="WhatsApp number (optional)"
  value={whatsapp}
  onChange={(e) => setWhatsapp(e.target.value)}
/>
           <button type="submit">

              Get Early Access

              <ArrowRight size={18}/>
            </button>

          </form>

          <div className="hero-points">

            <span>
              <CheckCircle2 size={18}/>
              Early Beta
            </span>

            <span>
              <CheckCircle2 size={18}/>
              Founder Pricing
            </span>

            <span>
              <CheckCircle2 size={18}/>
              No Spam
            </span>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity:0,x:60 }}
          animate={{ opacity:1,x:0 }}
          transition={{ delay:.3,duration:.8 }}
        >

          <div className="ai-window">

            <div className="window-header">

              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <strong>Algoritus AI</strong>

            </div>

            <div className="window-body">

              <small>PROMPT</small>

              <div className="prompt-box">
                Create a premium gym website with online memberships...
              </div>

              <div className="status">

         {visiblePages.map((item, index) => (
  <div
    className="status-item"
    key={`${item}-${index}`}
  >
    ✅ {item}
  </div>
))}

</div>

             <div className="progress">

  <span>Generating Website...</span>

  <div className="progress-bar">
    <div
      className="fill"
      style={{ width: `${progress}%` }}
    ></div>
  </div>

  <strong>{Math.round(progress)}%</strong>

</div>

{completed && (
  <div className="success-message">
    🚀 Website Published Successfully
  </div>
)}
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
