import About from "../components/home/About.jsx";
import Contact from "../components/home/Contact.jsx";
import Credentials from "../components/home/Credentials.jsx";
import FeaturedProjects from "../components/home/FeaturedProjects.jsx";
import Hero from "../components/home/Hero.jsx";
import Journey from "../components/home/Journey.jsx";
import Record from "../components/home/Record.jsx";
import Resume from "../components/home/Resume.jsx";
import Skills from "../components/home/Skills.jsx";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Journey />
      <Credentials />
      <Resume />
      <Record />
      <Contact />
    </main>
  );
}

export default HomePage;