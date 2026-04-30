import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/Navbar/Navbar";
import Container from "./components/layout/Container/Container";
import Social from "./components/sections/Social/Social";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero />
        <Social />
      </Container>
    </div>
  );
}

export default App;
