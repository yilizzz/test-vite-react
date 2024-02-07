import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Presentation from "./components/presentation";
import Specialization from "./components/specialization";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-column justify-content-center align-items-center w-full">
        <Presentation />
        <Specialization />
        <Portfolio />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
