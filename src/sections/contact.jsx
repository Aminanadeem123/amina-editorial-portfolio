
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

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-top">
          <span className="section-label">05 / GET IN TOUCH</span>
          <span className="contact-note">HAVE A PROJECT IN MIND?</span>
        </div>

        <div className="contact-layout">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Let's create<br /><em>something meaningful.</em></h2>
            <p>
              Have a project idea or want to discuss a collaboration?
              Send me a message and let's talk.
            </p>

            <div className="contact-links">
              <a href="mailto:aminanadeem712@gmail.com" className="contact-email">
                <Mail size={18} />
                EMAIL ME
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://github.com/Aminanadeem123"
                target="_blank"
                rel="noreferrer"
                className="contact-github"
              >
                <span className="github-mark">GH</span>
                GITHUB PROFILE
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-label">SEND A MESSAGE</span>

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
                <option value="" disabled>Select project type</option>
                <option>Business Website</option>
                <option>Landing Page</option>
                <option>Web Application</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              YOUR MESSAGE
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="4"
                required
              />
            </label>

            <button type="submit" disabled={sending}>
              {sending ? "SENDING..." : "SEND MESSAGE"}
              <ArrowUpRight size={17} />
            </button>

            {status && <p role="status">{status}</p>}
          </motion.form>
        </div>

        <div className="contact-bottom">
          <span>BASED IN KARACHI, PAKISTAN</span>
          <span>AVAILABLE FOR COLLABORATION</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
