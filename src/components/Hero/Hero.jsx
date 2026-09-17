import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__top">
        <p className="hero__eyebrow">UI-Focused Developer</p>

        <nav className="hero__nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <h1 className="hero__name">
        <span>Hazel</span> <span>Garvey</span>
      </h1>

      <div className="hero__bottom">
        <p className="hero__intro">
          I design and build thoughtful digital experiences for real people.
        </p>

        <div className="hero__meta">
          <p>Portfolio / 2026</p>

          <a className="hero__work-link" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
