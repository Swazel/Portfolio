import { Link } from "react-router-dom";

import "./C4CaseStudy.css";

import c4Homepage from "../../assets/images/c4/C4FrontpageDesktop.webp";
import c4HomepageOld from "../../assets/images/c4/C4OldFrontpage.webp";
import C4Oldpage from "../../assets/images/c4/C4MorpethOld.webp";
import C4Newpage from "../../assets/images/c4/C4MorpethNew.webp";
import c4Mobile from "../../assets/images/c4/c4Mobile.webp";
import c4Accessibility from "../../assets/images/c4/c4Accessibility.webp";

function C4CaseStudy() {
  return (
    <main className="case-study">
      <section className="case-study-hero">
        <div className="case-study-hero__top">
          <Link to="/#work" className="case-study-hero__back">
            ← Back to work
          </Link>

          <p>01 / Case Study</p>
        </div>

        <div className="case-study-hero__heading">
          <p className="case-study-hero__eyebrow">Website redesign</p>

          <h1>C4 Sightcare</h1>
        </div>

        <div className="case-study-hero__intro">
          <p className="case-study-hero__summary">
            Redesigning an established independent eyecare website around
            clarity, accessibility and real users.
          </p>

          <div className="case-study-hero__meta">
            <div>
              <span>Role</span>
              <p>Design & Development</p>
            </div>

            <div>
              <span>Focus</span>
              <p>UX · UI · Accessibility</p>
            </div>

            <div>
              <span>Built with</span>
              <p>React · CSS · JavaScript</p>
            </div>

            <div>
              <span>Year</span>
              <p>2026</p>
            </div>
          </div>
        </div>

        <div className="case-study-hero__visual">
          <img src={c4Homepage} alt="C4 Sightcare redesigned homepage" />
        </div>
      </section>
      <section className="case-study-context">
        <div className="case-study-context__header">
          <p>01 / Starting point</p>
          <p>Before the redesign</p>
        </div>

        <div className="case-study-context__grid">
          <div className="case-study-context__visual">
            <img src={c4HomepageOld} alt="C4 Sightcare previous homepage" />
          </div>

          <div className="case-study-context__content">
            <h2>The website no longer reflected the business behind it.</h2>

            <p className="case-study-context__intro">
              C4 Sightcare had developed significantly, but its website had not
              evolved with it.
            </p>

            <p>
              The redesign was an opportunity to reconsider the site as a whole:
              how information was organised, how easily patients could find what
              they needed, how the brand was presented and how well the
              experience worked across different screen sizes.
            </p>

            <div className="case-study-context__points">
              <div>
                <span>01</span>
                <p>Clearer information hierarchy and navigation</p>
              </div>

              <div>
                <span>02</span>
                <p>A stronger and more consistent visual identity</p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Accessibility and responsive behaviour considered from the
                  start
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-study-approach">
        <div className="case-study-approach__header">
          <p>02 / Approach</p>
          <p>Design priorities</p>
        </div>

        <div className="case-study-approach__intro">
          <h2>More than a visual refresh.</h2>

          <p>
            I wanted the redesign to improve how the site worked as well as how
            it looked, so the design decisions were shaped around a small set of
            practical priorities.
          </p>
        </div>

        <div className="case-study-approach__list">
          <article className="approach-item">
            <p className="approach-item__number">01</p>

            <h3>Information architecture</h3>

            <p>
              Restructuring content and navigation so patients could understand
              what C4 offers and reach important information more easily.
            </p>
          </article>

          <article className="approach-item">
            <p className="approach-item__number">02</p>

            <h3>Accessibility</h3>

            <p>
              Building readability, contrast, clear hierarchy and usable
              interaction states into the design rather than treating
              accessibility as a final check.
            </p>
          </article>

          <article className="approach-item">
            <p className="approach-item__number">03</p>

            <h3>Responsive design</h3>

            <p>
              Designing layouts and navigation that remain clear and useful
              across desktop, tablet and mobile rather than simply shrinking the
              desktop experience.
            </p>
          </article>

          <article className="approach-item">
            <p className="approach-item__number">04</p>

            <h3>Brand & content</h3>

            <p>
              Creating a more consistent visual language and content hierarchy
              that better reflects the practice and gives its services room to
              breathe.
            </p>
          </article>
        </div>
      </section>
      <section className="case-study-comparison">
        <div className="case-study-comparison__header">
          <p>03 / Before & after</p>
          <p>Visual evolution</p>
        </div>

        <div className="case-study-comparison__intro">
          <h2>
            Same business.
            <br />A clearer expression of it.
          </h2>

          <p>
            The redesign moved away from a fragmented, dated presentation toward
            a calmer and more deliberate system built around hierarchy,
            consistency and readability.
          </p>
        </div>
        <div className="case-study-comparison__pair">
          <div className="case-study-comparison__old">
            <div className="case-study-comparison__label">
              <span>Before</span>
              <span>Previous website</span>
            </div>

            <img src={C4Oldpage} alt="Previous C4 Sightcare Branch page" />
          </div>

          <div className="case-study-comparison__new">
            <div className="case-study-comparison__label">
              <span>After</span>
              <span>Redesigned website</span>
            </div>

            <img
              src={C4Newpage}
              alt="Redesigned C4 Sightcare website homepage"
            />
          </div>
        </div>
      </section>
      <section className="case-study-responsive">
        <div className="case-study-responsive__header">
          <p>04 / Responsive & accessibility</p>
          <p>Designed for real use</p>
        </div>

        <div className="case-study-responsive__intro">
          <h2>
            Mobile
            <br />
            wasn't an afterthought.
          </h2>

          <div className="case-study-responsive__copy">
            <p className="case-study-responsive__lead">
              The site needed to remain clear, usable and recognisable across
              different screen sizes and ways of interacting with it.
            </p>

            <p>
              Rather than simply compressing the desktop layout, mobile screens
              were treated as their own design problem — reconsidering
              navigation, hierarchy, spacing and how content should flow.
            </p>
          </div>
        </div>

        <div className="case-study-responsive__showcase">
          <div className="case-study-responsive__mobile">
            <div className="case-study-responsive__visual-label">
              <span>Responsive design</span>
              <span>Mobile</span>
            </div>

            <img
              src={c4Mobile}
              alt="C4 Sightcare website displayed in its mobile layout"
            />
          </div>

          <div className="case-study-responsive__accessibility">
            <div className="case-study-responsive__visual-label">
              <span>Accessibility</span>
              <span>Built in</span>
            </div>

            <img
              src={c4Accessibility}
              alt="Accessibility testing of the C4 Sightcare website"
            />

            <div className="case-study-responsive__principles">
              <div>
                <span>01</span>
                <p>Readable type and clear visual hierarchy</p>
              </div>

              <div>
                <span>02</span>
                <p>Colour contrast considered throughout the interface</p>
              </div>

              <div>
                <span>03</span>
                <p>Clear focus, hover and interaction states</p>
              </div>

              <div>
                <span>04</span>
                <p>Layouts designed to remain usable at smaller widths</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-study-build">
        <div className="case-study-build__header">
          <p>05 / Build & implementation</p>
          <p>From design to production</p>
        </div>

        <div className="case-study-build__intro">
          <h2>Designed and built as one process.</h2>

          <div className="case-study-build__copy">
            <p className="case-study-build__lead">
              Because I was responsible for both the design and development,
              decisions could be tested in the browser rather than handed off
              between separate stages.
            </p>

            <p>
              The finished site was built in React with reusable components,
              responsive CSS and a structure intended to stay manageable as
              content grows.
            </p>
          </div>
        </div>

        <div className="case-study-build__details">
          <article>
            <p className="case-study-build__number">01</p>

            <h3>Component-based</h3>

            <p>
              Repeated interface patterns were built as reusable React
              components, helping keep behaviour and presentation consistent
              across the site.
            </p>
          </article>

          <article>
            <p className="case-study-build__number">02</p>

            <h3>Responsive CSS</h3>

            <p>
              Layouts were developed to respond deliberately at different widths
              rather than relying on the desktop design to simply shrink.
            </p>
          </article>

          <article>
            <p className="case-study-build__number">03</p>

            <h3>Production ready</h3>

            <p>
              The redesign was implemented as the live C4 Sightcare website,
              turning the project from a design exercise into a real product
              used by patients and the business.
            </p>
          </article>
        </div>

        <div className="case-study-build__stack">
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
          <span>Responsive design</span>
          <span>Accessibility</span>
        </div>
      </section>
      <section className="case-study-outcome">
        <div className="case-study-outcome__header">
          <p>06 / Outcome</p>
          <p>Live project</p>
        </div>

        <div className="case-study-outcome__grid">
          <h2>A website that better reflects the business behind it.</h2>

          <div className="case-study-outcome__content">
            <p className="case-study-outcome__lead">
              The redesign is now the live C4 Sightcare website, replacing the
              previous site with a clearer, more consistent and responsive
              experience.
            </p>

            <p>
              The project brought together information architecture, visual
              design, accessibility and front-end development in one complete
              piece of work — from identifying the original problems through to
              building and deploying the finished site.
            </p>

            <p>
              It also changed the way I approach web projects: thinking less
              about individual pages and more about the systems, decisions and
              user needs that connect them.
            </p>

            <div className="case-study-outcome__links">
              <a
                href="https://www.c4sightcare.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit live website ↗
              </a>

              <Link to="/#work">Back to work →</Link>
            </div>
          </div>
        </div>

        <div className="case-study-outcome__footer">
          <p>Hazel Garvey</p>
          <p>C4 Sightcare / 2026</p>
        </div>
      </section>
    </main>
  );
}

export default C4CaseStudy;
