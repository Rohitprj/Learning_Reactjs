import { Navbar } from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programes from "./components/programes/Programes";
import Title from "./components/title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title />
        <Programes />
      </div>
    </div>
  );
};

export default App;
