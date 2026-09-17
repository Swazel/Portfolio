import Hero from "../../components/Hero/Hero";
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";
import EarlierWork from "../../components/EarlierWork/EarlierWork";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProject />
      <EarlierWork />
      <About />
      <Contact />
    </main>
  );
}

export default Home;
