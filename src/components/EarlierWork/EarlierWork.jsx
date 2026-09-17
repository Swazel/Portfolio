import "./EarlierWork.css";

function EarlierWork() {
  return (
    <section className="earlier-work">
      <div className="earlier-work__header">
        <p className="earlier-work__number">02</p>

        <p className="earlier-work__label">Earlier Work</p>
      </div>

      <div className="earlier-work__grid">
        <div className="earlier-work__visual">
          <img
            src="/src/assets/images/v1/OldPortfolio.webp"
            alt="Previous Hazel Garvey portfolio website"
          />
        </div>

        <div className="earlier-work__content">
          <p className="earlier-work__eyebrow">Portfolio / 2025</p>

          <h2 className="earlier-work__title">Portfolio v1</h2>

          <p className="earlier-work__intro">
            My first portfolio was built while I was learning front-end
            development and beginning to explore interface design.
          </p>

          <p className="earlier-work__body">
            Looking back at it now makes the progression much clearer — from how
            I structure content and use typography, to the way I think about
            accessibility, responsive layouts and the experience of the person
            using the interface.
          </p>

          <a href="/projects/portfolio-v1">
            Explore the project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default EarlierWork;
