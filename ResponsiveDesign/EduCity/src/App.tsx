import { Navbar } from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programes from "./components/programes/Programes";
import Title from "./components/title/Title";
import { About } from "./components/about/About";

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
      </div>
    </div>
  );
};

export default App;
