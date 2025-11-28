import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { HeroSection } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <Services />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}
