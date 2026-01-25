import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";
import Location from "./components/Location";
import ReviewsFeature from "./components/ReviewsFeature";
import Bookbtn from "./components/Bookbtn";

function App() {
  return (
    <>
      <Nav />
      <main role="main">
        <Header />
        <Treatments />
        <Bookbtn />
        <Reviews />
        <ReviewsFeature />
        <Contact />
        <Location />
      </main>
      <footer
        role="contentinfo"
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          borderTop: "3px solid #017992",
        }}
      >
        <p style={{ fontSize: "1.6rem", marginBottom: "1rem", color: "#333" }}>
          &copy; {new Date().getFullYear()} Welfare Massage Centre. All rights
          reserved.
        </p>
        <p style={{ fontSize: "1.6rem", color: "#555" }}>
          Professional Massage Therapy in Ashford, Kent |{" "}
          <a
            href="tel:+441233610050"
            style={{
              color: "#017992",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            01233 610050
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
