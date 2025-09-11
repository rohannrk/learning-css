import { Container } from "../components/container";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="layout">
      <div className="layout-lines-container">
        <div className="left-line" />
        <div className="right-line" />
        <Container>
          <Navbar />
          <Hero />
        </Container>
        <div className="horizontal-line" />
        <div className="hero-image-container">
          <img src="/hero-ui-5.png" alt="hero-image" className="hero-image" />
        </div>
      </div>
    </div>
  );
}
