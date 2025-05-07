import React from "react";
import { Container } from "react-bootstrap";
import MonopostoCard from "./MonopostoCard";

const Monoposto = () => {
  return (
    <div>
      <Container fluid className="container_reset">
        <MonopostoCard />
      </Container>
    </div>
  );
};

export default Monoposto;
