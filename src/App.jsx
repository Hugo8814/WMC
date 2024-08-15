import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";
import Location from "./components/Location";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Treatments />
      <Reviews />
      <Contact />
      <Location />
    </div>
  );
}

export default App;
