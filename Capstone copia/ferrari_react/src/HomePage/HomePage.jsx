import React from "react";
import { Container } from "react-bootstrap";
import HeroSection from "./HeroSection";
import HomeMonoposto from "./HomeMonoposto";
import HomeTecnica from "./HomeTecnica";
import HomeResults from "./HomeResults";
import HomeNews from "./HomeNews";

function HomePage() {
  return (
    <div>
      <Container fluid className="container_reset">
        <HeroSection />
        <HomeMonoposto />
        <HomeTecnica />
        <HomeResults />
        <HomeNews />
      </Container>
    </div>
  );
}

export default HomePage;
