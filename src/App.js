import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/Navbar/Navbar";
import Container from "./components/layout/Container/Container";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero />
      </Container>
    </div>
  );
}

export default App;
