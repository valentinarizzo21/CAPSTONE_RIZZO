import React, { useEffect, useState } from "react";
import { Container, Carousel, Row, Col, Button, Table } from "react-bootstrap";

const HomeResults = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./Circuit2025.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }
        return response.json();
      })
      .then((data) => setData(data.Foglio1))
      .catch((error) => setError(error.message));
  }, []);

  useEffect(() => {
    const title = document.querySelector(".title_three");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1200) {
        title.classList.add("show-title");
      } else {
        title.classList.remove("show-title");
      }
    });
  }, []);

  const calculateCountdown = (raceStart) => {
    const targetDate = new Date(raceStart);
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff < 0) {
      return {
        message: "Il Gran Premio è terminato!",
        isRaceStarted: false,
        isRaceFinished: true,
      };
    } else if (timeDiff === 0) {
      return {
        message: "Il Gran Premio è iniziato!",
        isRaceStarted: true,
        isRaceFinished: false,
      };
    }

    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30)); //mesi
    const days = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    ); //giorni
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ); //ore
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); //minuti

    return {
      message: `${months} mesi, ${days} giorni, ${hours} ore, ${minutes} minuti`,
      isRaceStarted: false,
      isRaceFinished: false,
    };
  };

  // useEffect(() => {
  //   const title = document.querySelector(".title_three");

  //   const handleScroll = () => {
  //     if (window.scrollY > 1200) {
  //       title.classList.add("show-title");
  //     } else {
  //       title.classList.remove("show-title");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (
    <div>
      <Container fluid className="px-5">
        <h1 className="fw-light my-5 title_three">
          Calendario Gran Premi 2025
        </h1>
        <Row>
          {data.length > 0 ? (
            <Carousel className="gp_carousel position-relative">
              {data.map((circuito) => {
                const { message, isRaceStarted, isRaceFinished } =
                  calculateCountdown(circuito.Race_Start);

                return (
                  <Carousel.Item key={circuito.Circuit_Id}>
                    <Row className="align-items-center justify-content-center">
                      <Col
                        xs={12}
                        md={6}
                        className="d-flex justify-content-center"
                      >
                        <div className="border_circuit">
                          <img
                            src={circuito.Image}
                            alt={circuito.Circuit_Name}
                            width="100%"
                            height="auto"
                            className="circuit_image"
                          />
                        </div>
                      </Col>
                      <Col xs={12} md={6}>
                        <div className="text-white">
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src="src/assets/img/RaceFlags.png"
                              alt="RaceFlags"
                              width={120}
                              height={120}
                            />
                            <h2 className="title_gp fw-light">
                              {circuito.Circuit_Name}
                            </h2>
                          </div>
                          <div className="d-flex flex-column">
                            <Table striped bordered hover>
                              <tbody>
                                <tr>
                                  <td>Luogo</td>
                                  <td>{circuito.Location}</td>
                                </tr>
                                <tr>
                                  <td>Data gara</td>
                                  <td>
                                    {circuito.Race_Start} - {circuito.Race_end}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sprint Race</td>
                                  <td>
                                    {circuito.Sprint_Race === "true"
                                      ? "Sì"
                                      : "No"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Countdown</td>
                                  <td>{message}</td>
                                </tr>
                                {(isRaceStarted || isRaceFinished) && (
                                  <tr>
                                    <td colSpan="2">
                                      <div className="d-flex justify-content-end">
                                        <Button className="btn_vedipiu">
                                          <div className="d-flex justify-content-between align-content-baseline">
                                            Vedi i risultati
                                            <i className="bi bi-arrow-right"></i>
                                          </div>
                                        </Button>
                                      </div>
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          ) : (
            <p>Nessun circuito disponibile.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HomeResults;
