import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "When will Algoritus launch?",
    answer:
      "We're actively building Algoritus. Join the waitlist to get early access before the public launch."
  },
  {
    question: "Is it free to join?",
    answer:
      "Yes. Joining the waitlist is completely free."
  },
  {
    question: "Will I receive spam emails?",
    answer:
      "No. You'll only receive important updates about launches, features, and early access."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container">

        <div className="faq-header">
          <span className="section-tag">FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before joining the waitlist.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              >
                <span>{faq.question}</span>

                <ChevronDown
                  size={20}
                  className={openIndex === index ? "rotate" : ""}
                />
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;