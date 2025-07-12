import { useState } from "react";

export default function MainContent() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      alert("Thank you for your message! We will get back to you soon.");
      setEmail("");
      setMessage("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <main className="main-content visible">
      <section className="hero-section">
        <img
          src="/logo-removebg-preview.png"
          alt="Evalumate Logo"
          className="hero-logo"
        />
        <p className="hero-subtitle">3x faster paper correction with AI</p>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>
            Reduce correction time by 3x with our advanced AI algorithms that
            understand context and provide accurate feedback instantly.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Precise Feedback</h3>
          <p>
            Get detailed, constructive feedback that helps students understand
            their mistakes and improve their performance.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Cost Effective</h3>
          <p>
            Save money on hiring additional correctors while maintaining the
            highest quality standards for your institution.
          </p>
        </div>
      </section>

      <section className="demo-section">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#2c5282",
          }}
        >
          See It In Action
        </h2>
        <div className="demo-mockup">
          <div className="paper-mockup">
            <div className="correction-lines">
              <div className="line"></div>
              <div className="correction"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="correction"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="correction"></div>
            </div>
          </div>
          <p style={{ marginTop: "1rem", color: "#6c757d" }}>
            AI-powered corrections with detailed feedback
          </p>
        </div>
      </section>

      <section className="contact-section">
        <h2 style={{ marginBottom: "2rem" }}>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your paper correction needs..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
