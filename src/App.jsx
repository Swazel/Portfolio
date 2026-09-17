import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import EarlierWork from "./components/EarlierWork/EarlierWork";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <main>
        {/* <Header /> */}
        <Hero />
        <FeaturedProject />
        <EarlierWork />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
