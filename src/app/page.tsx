import About from "./section/about";
import Contact from "./section/contact";
import Home from "./section/home";
import Portofolio from "./section/portofolio";
import SkillsAndServices from "./section/skills-services";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Home section */}
      <section id="home">
        <Home />
      </section>

      {/* About section */}
      <section id="about">
        <About />
      </section>

      {/* Skills & services section */}
      <section id="skills">
        <SkillsAndServices />
      </section>

      {/* Portofolio section */}
      <section id="portofolio">
        <Portofolio />
      </section>

      {/* Contact section */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
