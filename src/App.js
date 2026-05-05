import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/Navbar/Navbar";
import Container from "./components/layout/Container/Container";
import Social from "./components/sections/Social/Social";
import Features from "./components/sections/Features/Features";
import FeaturesAside from "./components/sections/FeaturesAside/FeaturesAside";
import Pricing from "./components/sections/Pricing/Pricing";
import FAQ from "./components/sections/FAQ/FAQ";
import Newsletter from "./components/sections/Newsletter/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero />
        <Social />
        <Features />
        <FeaturesAside />
        <Pricing />
        <FAQ />
        <Newsletter />
      </Container>
    </div>
  );
}

export default App;
