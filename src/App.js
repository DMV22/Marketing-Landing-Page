import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/Navbar/Navbar";
import Container from "./components/layout/Container/Container";
import Social from "./components/sections/Social/Social";
import Features from "./components/sections/Features/Features";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero />
        <Social />
        <Features />
      </Container>
    </div>
  );
}

export default App;
