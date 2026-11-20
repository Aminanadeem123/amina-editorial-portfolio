
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "./contact.css";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success: Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error: Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-top">
          <span className="section-label">05 / CONTACT</span>
          <span className="contact-note">HAVE A PROJECT IN MIND?</span>
        </div>

        <div className="contact-layout">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="contact-kicker">LET'S WORK TOGETHER</span>

            <h2>
              Have an idea?
              <br />
              <em>Let's talk.</em>
            </h2>

            <p>
              Have a website project, a question, or an idea
              you'd like to discuss? I'd be happy to hear from you.
            </p>

            <div className="contact-links">
              <a
                href="mailto:aminanadeem712@gmail.com"
                className="contact-email"
              >
                <Mail size={17} />
                EMAIL ME
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://github.com/Aminanadeem123"
                target="_blank"
                rel="noreferrer"
                className="contact-github"
              >
                GITHUB PROFILE
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="contact-location">
              <span className="location-dot"></span>
              KARACHI, PAKISTAN
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="form-heading">
              <span className="section-label">01 — SEND A MESSAGE</span>
              <p>I'll get back to you as soon as possible.</p>
            </div>

            <label>
              YOUR NAME
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              EMAIL ADDRESS
              <input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                required
              />
            </label>

            <label>
              PROJECT TYPE
              <select name="project_type" defaultValue="" required>
                <option value="" disabled>
                  Select project type
                </option>
                <option value="Business Website">Business Website</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Web Application">Web Application</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              YOUR MESSAGE
              <textarea
                name="message"
                placeholder="Tell me a little about your idea..."
                rows="4"
                required
              />
            </label>

            <button type="submit" disabled={sending}>
              {sending ? "SENDING..." : "SEND MESSAGE"}
              <ArrowUpRight size={17} />
            </button>

            {status && (
              <p
                className={`form-status ${
                  status.startsWith("success") ? "success" : "error"
                }`}
                role="status"
              >
                {status.split(": ")[1]}
              </p>
            )}
          </motion.form>
        </div>

        <div className="contact-bottom">
          <span>AMINA NADEEM / WEB DEVELOPER</span>
          <span>OPEN TO PROJECT DISCUSSIONS</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
