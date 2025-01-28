import { Navbar } from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programes from "./components/programes/Programes";
import Title from "./components/title/Title";
import { About } from "./components/about/About";
import { Campus } from "./components/campus/Campus";
import { Testimonials } from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="OUR PROGRAMMES" subTitle="What We Offer" />
        <Programes />
        <About />
        <Title title="GALLERY" subTitle="Campus Photos" />
        <Campus />
        <Title title="TESTIMONIALS" subTitle="What student says" />
        <Testimonials />
        <Title title="CONTACT US" subTitle="Get in Touch" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
