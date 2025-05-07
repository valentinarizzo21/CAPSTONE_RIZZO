import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { CarFront, Gear, Speedometer } from "react-bootstrap-icons";

const HomeMonoposto = () => {
  const [monoposto, setMonoposto] = useState([]);

  useEffect(() => {
    fetch("/FerrariMonoposto.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento dei dati");
        }
        return response.json();
      })
      .then((data) => {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setMonoposto(shuffled.slice(0, 6));
      })
      .catch((error) => console.error("Errore:", error));
  }, []);

  useEffect(() => {
    const title = document.querySelector(".title_home");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        title.classList.add("show-title");
      } else {
        title.classList.remove("show-title");
      }
    });
  }, []);

  return (
    <Container fluid className="px-5">
      <h1 className="fw-light title_home my-5">Le monoposto Ferrari</h1>
      <Row className="d-flex justify-content-between">
        {monoposto.map((car, index) => {
          return (
            <Col xs={12} md={6} lg={4} xl={4} key={index} className="mb-4">
              <Card className="h-100 ">
                <Card.Img
                  variant="top"
                  src={car.immagine}
                  alt={car.nome}
                  className="card-img"
                />
                <Card.Body
                  className="d-flex flex-column card_monoposto"
                  onMouseMove={(e) => {
                    const body = e.currentTarget;
                    const rect = body.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    body.style.setProperty("--x", `${x}px`);
                    body.style.setProperty("--y", `${y}px`);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty("--x", `-999px`);
                    e.currentTarget.style.setProperty("--y", `-999px`);
                  }}
                >
                  <Card.Title
                    className="text-center h1 fw-light"
                    style={{ height: "30px" }}
                  >
                    <span className="year_car">{car.anno}</span> - {car.nome}
                  </Card.Title>
                  <Card.Text className="d-flex flex-column">
                    <span style={{ height: "50px" }} className="text-center">
                      Piloti:
                    </span>
                    <span className="d-flex justify-content-center">
                      {car.piloti.map((pilota, i) => (
                        <span className="mx-1 text_box" key={i}>
                          {pilota}
                        </span>
                      ))}
                    </span>
                    <span className="d-flex flex-column">
                      <span className="d-flex  justify-content-between my-1">
                        <span className="align-self-center">
                          <Gear className="me-3" size={24} />
                          <span className="h5 fw-light">Motore:</span>
                        </span>
                        <span className="text_box">{car.motore}</span>
                      </span>
                      <span className="d-flex justify-content-between my-1">
                        <span className="align-self-center">
                          <CarFront className="me-3" size={24} />
                          <span className="h5 fw-light">Cavalli:</span>
                        </span>
                        <span className="text_box">{car.potenza}</span>
                      </span>
                      <span className="d-flex justify-content-between my-1">
                        <span className="align-self-center">
                          <Speedometer className="me-3" size={24} />
                          <span className="h5 fw-light">Velocità massima:</span>
                        </span>

                        <span className="text_box">{car.velocita_max}</span>
                      </span>
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
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
  );
};

export default HomeMonoposto;
