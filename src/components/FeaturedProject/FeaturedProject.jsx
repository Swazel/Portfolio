import "./FeaturedProject.css";
import c4FrontpageDesktop from "../../assets/images/c4/C4FrontpageDesktop.webp";
import { Link } from "react-router-dom";

function FeaturedProject() {
  return (
    <section className="featured-project" id="work">
      <div className="featured-project__header">
        <p className="featured-project__number">01</p>

        <p className="featured-project__label">Featured Project</p>
      </div>

      <div className="featured-project__grid">
        <div className="featured-project__intro">
          <h2 className="featured-project__title">C4 Sightcare</h2>

          <p className="featured-project__summary">
            A complete website redesign for an independent eyecare business.
          </p>
        </div>

        <div className="featured-project__visual">
          <div className="featured-project__image">
            <img src={c4FrontpageDesktop} alt="C4 Sightcare Website" />
          </div>
        </div>

        <div className="featured-project__services">
          <p>UX / UI</p>
          <p>Front-end development</p>
          <p>Accessibility</p>
          <p>Responsive design</p>
        </div>

        <div className="featured-project__description">
          <p>
            Reworking the site from the ground up with a clearer information
            architecture, stronger visual identity and a more accessible
            experience across desktop and mobile.
          </p>

          <Link to="/projects/c4-sightcare">
            View case study <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
