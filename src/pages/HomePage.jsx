import About from "../components/home/About.jsx";
import Contact from "../components/home/Contact.jsx";
import Education from "../components/home/Education.jsx";
import FeaturedProjects from "../components/home/FeaturedProjects.jsx";
import Hero from "../components/home/Hero.jsx";
import ResumeSection from "../components/home/ResumeSection.jsx";
import Skills from "../components/home/Skills.jsx";
import Stats from "../components/home/Stats.jsx";

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <FeaturedProjects />
      <Education />
      <ResumeSection />
      <Contact />
    </main>
  );
}

export default HomePage;