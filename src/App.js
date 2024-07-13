import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/hero";
import Aboutus from "./Components/aboutus/aboutus";


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Hero />
        <Aboutus />
      </>
    </div>
  );
}

export default App;
