import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Teoria = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/test");
  };
  return (
    <div style={{ color: "#f1f1f1", minHeight: "100vh" }}>
      <Container className="py-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center mb-4 h1">Aerodinamica Ferrari</h1>

          <p
            className="lead text-center mb-5"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            L’aerodinamica è il cuore della performance Ferrari in Formula 1:
            consente di dominare le curve con aderenza e di volare nei
            rettilinei.
          </p>
        </div>
        <Row className="g-5 m-3">
          <Col md={6}>
            <Card className="bg-dark text-white h-100 border-0 shadow">
              <Card.Img
                src="https://www.formula1.it/admin/foto/cos-e-il-carico-aerodinamico-e-perche-e-cosi-fondamentale-per-le-vetture-di-formula-1-13900-1.jpg"
                alt="Carico aerodinamico"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <Card.Title
                className="text-center my-3"
                style={{ color: "#ffd700", fontSize: "1.5rem" }}
              >
                Carico Aerodinamico
              </Card.Title>
              <Card.Text className="fw-light">
                Le ali e il fondo della Ferrari creano una forza chiamata carico
                aerodinamico, che spinge la vettura verso il basso e aumenta
                l’aderenza. È così potente che, in teoria, una F1 potrebbe
                correre anche a testa in giù!
                <br />
                <br />
                La forza generata si calcola con la formula:
                <br />
                <span className="text-center my-3">
                  <code>
                    F = (1/2) · ρ · C<sub>L</sub> · A · v²
                  </code>
                </span>
                <br />
                Dove <strong>ρ</strong> è la densità dell’aria,{" "}
                <strong>
                  C<sub>L</sub>
                </strong>
                è il coefficiente aerodinamico, <strong>A</strong> è l’area
                frontale e <strong>v</strong> è la velocità.
              </Card.Text>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="bg-dark text-white h-100 border-0 shadow">
              <Card.Img
                src="https://www.f1sport.it/wp-content/uploads/2018/12/peso_downforce.jpg"
                alt="Resistenza aerodinamica"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <Card.Title
                className="text-center my-3"
                style={{ color: "#ffd700", fontSize: "1.5rem" }}
              >
                Resistenza all’Aria
              </Card.Title>
              <Card.Text className="fw-light">
                La resistenza aerodinamica è la forza che si oppone al movimento
                della Ferrari: più è alta, più la vettura fatica a raggiungere
                alte velocità nei rettilinei.
                <br />
                <br />
                La sua formula è:
                <br />
                <span className="text-center my-3">
                  <code>
                    Fₐ = (1/2) · ρ · C<sub>D</sub> · A · v²
                  </code>
                </span>
                <br />
                Dove
                <strong>
                  C<sub>D</sub>
                </strong>
                è il coefficiente di resistenza, <strong>A</strong> è l’area
                frontale e <strong>v</strong> la velocità.
                <br />
                <br />
                Ferrari lavora per ridurre ogni turbolenza, modellando ogni
                superficie per “tagliare” l’aria come un coltello, senza perdere
                il carico aerodinamico che garantisce aderenza.
              </Card.Text>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="bg-dark text-white h-100 border-0 shadow">
              <Card.Img
                src="https://www.maxmania.it/wp-content/uploads/2025/02/DRS-Ferrari.webp"
                alt="DRS Ferrari"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <Card.Title
                className="text-center my-3"
                style={{ color: "#ffd700", fontSize: "1.5rem" }}
              >
                Il DRS
              </Card.Title>
              <Card.Text className="fw-light">
                Il DRS (Drag Reduction System) è un sistema utilizzato per
                aumentare la velocità nei rettilinei riducendo la resistenza
                dell’aria.
                <br />
                <br />
                Quando attivato, un flap mobile sull’ala posteriore si apre,
                modificando il profilo aerodinamico e diminuendo il{" "}
                <strong>drag</strong>. Questo permette alla Ferrari di
                guadagnare fino a <strong>15 km/h</strong> in velocità massima.
                <br />
                <br />
                Il DRS può essere utilizzato solo in zone specifiche del
                circuito e solo se il pilota si trova a meno di{" "}
                <strong>1 secondo</strong> dalla vettura davanti.
                <br />
                <br />È una soluzione che combina aerodinamica e strategia,
                permettendo sorpassi più spettacolari e un maggiore
                coinvolgimento durante la gara.
              </Card.Text>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="bg-dark text-white h-100 border-0 shadow">
              <Card.Img
                src="https://www.funoanalisitecnica.com/wp-content/uploads/2025/03/2025-03-16-11.55.55.jpg"
                alt="Assetti Circuiti"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <Card.Title
                className="text-center my-3"
                style={{ color: "#ffd700", fontSize: "1.5rem" }}
              >
                Assetti per Circuito
              </Card.Title>
              <Card.Text className="fw-light">
                Ogni pista di Formula 1 è diversa, e la Ferrari deve adattare la
                vettura alle caratteristiche specifiche del circuito. Questo
                processo si chiama <strong>messa a punto</strong> o{" "}
                <strong>assetto</strong>.
                <br />
                <br />
                L’assetto riguarda una serie di regolazioni tecniche:
                aerodinamica, altezza da terra, sospensioni, rigidità del
                telaio, barra antirollio, distribuzione dei pesi e altro ancora.
                <br />
                <br />
                Ci sono tre approcci principali:
                <br />
                <br />
                <strong>Assetto a alto carico aerodinamico</strong>– Piste con
                molte curve lente (es. Monaco, Ungheria): si usano ali molto
                inclinate per generare più deportanza. La vettura è più stabile
                ma più lenta nei rettilinei.
                <br />
                <br />
                <strong>Assetto a basso carico aerodinamico</strong> – Circuiti
                veloci (es. Monza, Baku): si riduce l’inclinazione delle ali per
                tagliare la resistenza e guadagnare velocità in rettilineo,
                sacrificando però la tenuta in curva.
                <br />
                <br />
                <strong>Assetto bilanciato</strong> – Circuiti misti (es.
                Silverstone, Austin): si cerca il miglior compromesso tra
                velocità e grip.
                <br />
              </Card.Text>
            </Card>
          </Col>
        </Row>

        <Button
          variant="primary"
          size="lg"
          className="d-flex justify-content-center mt-5 btn_vedipiu"
          onClick={handleButtonClick}
        >
          Testa le tue capacità
        </Button>
      </Container>
    </div>
  );
};

export default Teoria;
