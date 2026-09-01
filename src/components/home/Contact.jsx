import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  Send
} from "lucide-react";

import Reveal from "../common/Reveal.jsx";
import { personalData } from "../../data/personalData.js";
import { getAssetPath } from "../../utils/getAssetPath.js";

const socialLinks = [
  { label: "GitHub", href: personalData.socialLinks.github, icon: Github },
  {
    label: "LinkedIn",
    href: personalData.socialLinks.linkedin,
    icon: Linkedin
  },
  { label: "Email", href: personalData.socialLinks.email, icon: Mail }
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(
      `Portfolio message from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setEmailCopied(true);

      window.setTimeout(() => {
        setEmailCopied(false);
      }, 1800);
    } catch {
      window.location.href = personalData.socialLinks.email;
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="site-container contact__layout">
        <div className="contact__copy">
          <Reveal>
            <span className="eyebrow">
              <span>
                08 <span>/</span> CONTACT &amp; COLLABORATION
              </span>
            </span>

            <h2>
              Let&apos;s create <em>secure</em>
              <br />
              digital experiences.
            </h2>

            <p>
              I&apos;m always open to cybersecurity internships,
              hackathons, project collaborations and security-focused
              work.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="contact__availability">
              <span className="dot" />
              <b>{personalData.availability.status.toUpperCase()}</b>
            </div>
          </Reveal>

          <Reveal delay={2} className="contact__actions">
            <a
              className="btn--dark"
              href={getAssetPath(personalData.resumeFile)}
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <ArrowRight size={16} />
            </a>

            <a
              className="text-link"
              href={`mailto:${personalData.email}`}
              onClick={(event) => {
                event.preventDefault();
                copyEmail();
              }}
            >
              {emailCopied ? "Email copied" : "Copy email"}
              <ArrowUpRight size={15} />
            </a>
          </Reveal>

          <Reveal delay={3}>
            <div className="contact__socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <form
            className="contact__form"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <p>Send Message</p>

            <label>
              NAME
              <input
                name="name"
                required
                placeholder="Your name"
              />
            </label>

            <label>
              EMAIL
              <input
                name="email"
                required
                type="email"
                placeholder="Your email"
              />
            </label>

            <label>
              MESSAGE
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Write your message..."
              />
            </label>

            <button
              type="submit"
              className="btn--dark contact__submit"
            >
              {sent ? <Check size={16} /> : <Send size={16} />}
              {sent ? "Email app opened" : "Send message"}
            </button>

            {emailCopied && <small>Email copied to clipboard.</small>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;