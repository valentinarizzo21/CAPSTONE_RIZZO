import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { CarFront, Gear, Speedometer } from "react-bootstrap-icons";

const MonopostoCard = () => {
  const [monoposto, setMonoposto] = useState([]);
  const [decennioAttivo, setDecennioAttivo] = useState("2020");

  useEffect(() => {
    fetch("/FerrariMonoposto.json")
      .then((response) => {
        if (!response.ok) throw new Error("Errore nel caricamento dei dati");
        return response.json();
      })
      .then((data) => setMonoposto(data))
      .catch((error) => console.error("Errore:", error));
  }, []);

  const decenni = [
    "1940",
    "1950",
    "1960",
    "1970",
    "1980",
    "1990",
    "2000",
    "2010",
    "2020",
  ];

  const inizio = parseInt(decennioAttivo);
  const fine = inizio + 9;
  const monopostoFiltrate = monoposto.filter(
    (car) => car.anno >= inizio && car.anno <= fine
  );

  return (
    <Container fluid className="py-4 px-0">
      <Row className="m-0 p-0">
        <Col className="m-0 p-0">
          <Tabs
            activeKey={decennioAttivo}
            onSelect={(k) => setDecennioAttivo(k)}
            className="mb-3 monoposto_years"
            justify
          >
            {decenni.map((decennio) => (
              <Tab eventKey={decennio} title={decennio} key={decennio}>
                <Row>
                  {monopostoFiltrate.length === 0 ? (
                    <p className="text-center mt-4">
                      Nessuna monoposto trovata per questo decennio.
                    </p>
                  ) : (
                    monopostoFiltrate.map((car, index) => (
                      <Col
                        xs={12}
                        md={6}
                        lg={4}
                        xl={4}
                        key={index}
                        className="mb-4"
                      >
                        <Card className="h-100">
                          <Card.Img
                            variant="top"
                            src={car.immagine}
                            alt={car.nome}
                            className="card-img"
                          />
                          <Card.Body className="d-flex flex-column card_monoposto">
                            <Card.Title
                              className="text-center h1 fw-light"
                              style={{ height: "30px" }}
                            >
                              <span className="year_car">{car.anno}</span> -{" "}
                              {car.nome}
                            </Card.Title>
                            <Card.Text className="d-flex flex-column">
                              <span
                                style={{ height: "50px" }}
                                className="text-center"
                              >
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
                                <span className="d-flex justify-content-between my-1">
                                  <span className="align-self-center">
                                    <Gear className="me-3" size={24} />
                                    <span className="h5 fw-light">Motore:</span>
                                  </span>
                                  <span className="text_box">{car.motore}</span>
                                </span>
                                <span className="d-flex justify-content-between my-1">
                                  <span className="align-self-center">
                                    <CarFront className="me-3" size={24} />
                                    <span className="h5 fw-light">
                                      Cavalli:
                                    </span>
                                  </span>
                                  <span className="text_box">
                                    {car.potenza}
                                  </span>
                                </span>
                                <span className="d-flex justify-content-between my-1">
                                  <span className="align-self-center">
                                    <Speedometer className="me-3" size={24} />
                                    <span className="h5 fw-light">
                                      Velocità massima:
                                    </span>
                                  </span>
                                  <span className="text_box">
                                    {car.velocita_max}
                                  </span>
                                </span>
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  )}
                </Row>
              </Tab>
            ))}
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default MonopostoCard;
