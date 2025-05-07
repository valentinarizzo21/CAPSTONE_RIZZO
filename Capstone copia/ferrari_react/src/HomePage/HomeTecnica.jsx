import React, { useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import {
  AirplaneEngines,
  ArrowUpRight,
  Speedometer,
} from "react-bootstrap-icons";

const HomeTecnica = () => {
  useEffect(() => {
    const title = document.querySelector(".title_two");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        title.classList.add("show-title");
      } else {
        title.classList.remove("show-title");
      }
    });
  }, []);

  return (
    <div>
      <Container fluid className="px-5">
        <h1 className="fw-light my-5 title_two">Areodinamica e Tecnologie</h1>
        <Row>
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://www.funoanalisitecnica.com/wp-content/uploads/2024/07/1-15.jpg"
                alt="Aerodinamica"
              />
            </Card>
          </Col>
          <Col md={6} className="text-white">
            <h4 className="fw-light">Aerodinamica: il movimento dell'aria</h4>
            <div className="list-unstyled">
              <div className="d-flex flex-column mb-3">
                <div className="d-flex">
                  <ArrowUpRight className="me-3" size={24} />
                  <strong>Resistenza aerodinamica:</strong>
                </div>
                La forza che si oppone al movimento di un oggetto nell'aria,
                influenzando la sua velocità e l'efficienza.
              </div>
              <div className="d-flex flex-column mb-3">
                <div className="d-flex">
                  <Speedometer className="me-3" size={24} />
                  <strong>Efficienza aerodinamica:</strong>
                </div>
                Ottimizzare il design per ridurre la resistenza e migliorare le
                performance, sia in volo che sulla strada.
              </div>
              <div className="d-flex flex-column mb-3">
                <div className="d-flex">
                  <AirplaneEngines className="me-3" size={24} />
                  <strong>Portanza:</strong>
                </div>
                La forza che permette agli aerei di sollevarsi, creando una
                spinta verso l'alto grazie alla forma delle ali.
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button className="btn_vedipiu">
            <div className="d-flex justify-content-between align-content-baseline">
              Vedi di più
              <i className="bi bi-arrow-right"></i>
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomeTecnica;
