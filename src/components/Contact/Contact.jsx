import "./Contact.css";

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact__header">
        <p className="contact__number">04</p>
        <p className="contact__label">Contact</p>
      </div>

      <div className="contact__grid">
        <div className="contact__statement">
          <p className="contact__eyebrow">Have something in mind?</p>

          <h2 className="contact__title">
            Let’s make
            <br />
            something good.
          </h2>
        </div>

        <div className="contact__details">
          <p>
            I’m always interested in thoughtful projects, opportunities to
            learn, and work where good interfaces genuinely matter.
          </p>

          <a className="contact__email" href="mailto:hazel@hazelgarvey.com">
            EMAIL ME ↗
          </a>
        </div>
      </div>

      <div className="contact__footer">
        <p>Hazel Garvey</p>

        <div className="contact__links">
          <a href="https://github.com/Swazel" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/hazel-garvey"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <p>© 2026</p>
      </div>
    </footer>
  );
}

export default Contact;
