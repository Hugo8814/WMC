import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";
import Location from "./components/Location";
import ReviewsFeature from "./components/ReviewsFeature";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Treatments />
      <Reviews />
      <ReviewsFeature />
      <Contact />
      <Location />
    </>
  );
}

export default App;
