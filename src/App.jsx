import {
  Header,
  Hero,
  TechStrip,
  About,
  Projects,
  Services,
  Contact,
  Footer,
} from "./components";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />

      <main>
        <Hero />
        <TechStrip />

        <div className="reveal">
          <About />
        </div>

        <div className="reveal">
          <Projects />
        </div>

        <div className="reveal">
          <Services />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
