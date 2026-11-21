
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "./contact.css";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error: Email service is not configured yet.");
      return;
    }

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey }
      );

      setStatus("success: Your message has been sent successfully!");
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
            <span className="contact-kicker">
              LET'S START A CONVERSATION
            </span>

            <h2>
              Have an idea?
              <br />
              <em>Let's talk.</em>
            </h2>

            <p>
              Whether you have a website project, a question,
              or simply want to discuss an idea, feel free
              to get in touch.
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
                rel="noopener noreferrer"
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
              <span className="section-label">
                01 — SEND A MESSAGE
              </span>
              <p>Tell me what you have in mind.</p>
            </div>

            <label>
              YOUR NAME
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                autoComplete="name"
                maxLength={80}
                required
              />
            </label>

            <label>
              EMAIL ADDRESS
              <input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                autoComplete="email"
                maxLength={120}
                required
              />
            </label>

            <label>
              PROJECT TYPE
              <select
                name="project_type"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select project type
                </option>
                <option value="Business Website">
                  Business Website
                </option>
                <option value="Landing Page">
                  Landing Page
                </option>
                <option value="E-commerce Website">
                  E-commerce Website
                </option>
                <option value="Web Application">
                  Web Application
                </option>
                <option value="Website Improvement">
                  Website Improvement
                </option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              YOUR MESSAGE
              <textarea
                name="message"
                placeholder="Tell me a little about your idea..."
                rows="4"
                maxLength={2000}
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
                  status.startsWith("success")
                    ? "success"
                    : "error"
                }`}
                role="status"
                aria-live="polite"
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
