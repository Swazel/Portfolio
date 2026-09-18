// src/pages/PortfolioV1/PortfolioV1.jsx

import { Link } from "react-router-dom";

import "./PortfolioV1.css";

import oldPortfolio from "../../assets/images/v1/OldPortfolio.webp";
import currentPortfolio from "../../assets/images/v2/PortfolioV2.webp";

function PortfolioV1() {
  return (
    <main className="portfolio-evolution">
      {/* HERO */}
      <section className="portfolio-evolution__hero">
        <div className="portfolio-evolution__top">
          <Link to="/#work">← Back to work</Link>

          <p>02 / Retrospective</p>
        </div>

        <div className="portfolio-evolution__heading">
          <p>Portfolio evolution</p>

          <h1>
            Portfolio v1
            <span aria-hidden="true"> → </span>
            v2
          </h1>
        </div>

        <div className="portfolio-evolution__intro">
          <p className="portfolio-evolution__lead">
            My first portfolio was about proving I could build a website. This
            one has a different job: showing how I think about one.
          </p>

          <div className="portfolio-evolution__meta">
            <div>
              <span>Then</span>
              <p>HTML · CSS · JavaScript</p>
            </div>

            <div>
              <span>Now</span>
              <p>React · Component-based</p>
            </div>

            <div>
              <span>Focus</span>
              <p>UI · Accessibility · Responsive design</p>
            </div>

            <div>
              <span>Year</span>
              <p>2025 → 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* THEN */}
      <section className="portfolio-then">
        <div className="portfolio-then__header">
          <p>01 / Then</p>
          <p>Portfolio v1</p>
        </div>

        <div className="portfolio-then__grid">
          <div className="portfolio-then__visual">
            <img
              src={oldPortfolio}
              alt="Previous Hazel Garvey portfolio website"
            />
          </div>

          <div className="portfolio-then__content">
            <h2>A site built to show what I had learned.</h2>

            <p className="portfolio-then__lead">
              Portfolio v1 was built with HTML, CSS and JavaScript while I was
              developing my front-end skills.
            </p>

            <p>
              Its structure was much more CV-led: introducing my background,
              employment and education before eventually reaching the work
              itself.
            </p>

            <p>
              It did what I needed at the time — gave me somewhere to bring my
              experience and projects together and, importantly, gave me a
              complete website to build and publish myself.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT CHANGED */}
      <section className="portfolio-change">
        <div className="portfolio-change__header">
          <p>02 / What changed</p>
          <p>Different priorities</p>
        </div>

        <div className="portfolio-change__intro">
          <h2>The biggest change isn’t the technology.</h2>

          <p>
            Rebuilding the portfolio made it clear that my approach had changed
            as much as my technical skills.
          </p>
        </div>

        <div className="portfolio-change__table">
          <div className="portfolio-change__titles">
            <p>Portfolio v1</p>
            <p>Portfolio v2</p>
          </div>

          <div className="portfolio-change__row">
            <p>CV-led</p>
            <p>Work-led</p>
          </div>

          <div className="portfolio-change__row">
            <p>Projects listed</p>
            <p>Projects explored as case studies</p>
          </div>

          <div className="portfolio-change__row">
            <p>HTML / CSS / JavaScript</p>
            <p>React and reusable components</p>
          </div>

          <div className="portfolio-change__row">
            <p>Conventional developer aesthetic</p>
            <p>A deliberate personal visual identity</p>
          </div>

          <div className="portfolio-change__row">
            <p>Responsive adaptation</p>
            <p>Responsive layouts designed deliberately</p>
          </div>

          <div className="portfolio-change__row">
            <p>Showing what I knew</p>
            <p>Showing how I think</p>
          </div>
        </div>
      </section>

      {/* NOW */}
      <section className="portfolio-now">
        <div className="portfolio-now__header">
          <p>03 / Now</p>
          <p>Portfolio v2</p>
        </div>

        <div className="portfolio-now__statement">
          <h2>The portfolio itself has become part of the work.</h2>

          <p>
            Rather than simply containing projects, this version is designed to
            demonstrate the same thinking I want the projects to show:
            hierarchy, accessibility, responsive behaviour and a clear visual
            system.
          </p>
        </div>

        <div className="portfolio-now__visual">
          <img
            src={currentPortfolio}
            alt="Portfolio v2 homepage transitioning from the introduction into the featured C4 Sightcare project"
          />
        </div>

        <div className="portfolio-now__reflection">
          <p>
            I’m still learning, but the emphasis has shifted from proving that I
            can make things work to thinking more carefully about why they work
            the way they do.
          </p>

          <Link to="/#work">Back to work →</Link>
        </div>

        <div className="portfolio-now__footer">
          <p>Hazel Garvey</p>
          <p>Portfolio v1 → v2</p>
        </div>
      </section>
    </main>
  );
}

export default PortfolioV1;
