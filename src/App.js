import Cards from "./components/Cards/Cards";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Information from "./components/information/Information";
import Reviews from "./components/reviews/Reviews";
import Skills from "./components/skills/Skills";
import VideoCard from "./components/video-cards/Videocard";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Information />
      <About />
      <Cards />
      <VideoCard />
      <Skills />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
