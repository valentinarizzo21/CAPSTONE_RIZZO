import React from "react";
import GpsMap from "./GpsMap";
import { Container } from "react-bootstrap";

const Results = () => {
  return (
    <div>
      <Container fluid className="container_reset">
        <GpsMap />
      </Container>
    </div>
  );
};

export default Results;
