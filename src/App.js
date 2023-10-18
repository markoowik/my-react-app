import Cards from "./components/Cards/Cards";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Information from "./components/information/Information";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Information />
      <About />
      <Cards />
    </div>
  );
}

export default App;
