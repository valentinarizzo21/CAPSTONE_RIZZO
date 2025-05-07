import React from "react";
import { Container } from "react-bootstrap";
import Modellino from "./Modellino";
import Teoria from "./Teoria";

const Tecnologia = () => {
  return (
    <div>
      <Container fluid className="container_reset">
        <Modellino />
        <Teoria />
      </Container>
    </div>
  );
};

export default Tecnologia;
