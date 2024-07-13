import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/hero";
import Aboutus from "./Components/aboutus/aboutus";
import Services from "./Components/Services/Services";
import Gallary from "./Components/Gallary/Gallary";


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Hero />
        <Aboutus />
        <Services />
        <Gallary />
      </>
    </div>
  );
}

export default App;
