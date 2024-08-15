import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Treatments />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
