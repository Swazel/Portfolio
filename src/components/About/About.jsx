import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <p className="about__number">03</p>
        <p className="about__label">About</p>
      </div>

      <div className="about__grid">
        <h2 className="about__statement">
          I spent years working face-to-face with people before I started
          building interfaces.
        </h2>

        <div className="about__content">
          <p className="about__intro">
            That background still shapes the way I approach digital work.
          </p>

          <p>
            I’m a UI-focused developer with a background in eyecare and practice
            management. Working directly with people taught me the importance of
            clear communication, accessibility and paying attention to the small
            details that affect someone’s experience.
          </p>

          <p>
            I now bring that same thinking to the web: combining front-end
            development with a growing interest in interface design, interaction
            and user experience.
          </p>

          <a href="/about">
            More about me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
