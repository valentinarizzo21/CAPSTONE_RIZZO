import { Card, Col, Row } from "react-bootstrap";

const SelettoreCard = ({
  titolo,
  opzioni,
  selezionato,
  setSelezionato,
  tipo,
}) => {
  if (!Array.isArray(opzioni) || opzioni.length === 0) {
    return <div>No options available</div>;
  }

  return (
    <Card className="externalBorder mt-4 p-3 shadow-sm">
      <h5 className="mb-3 text-center fw-medium h3">{titolo}</h5>
      <Row>
        {opzioni.map((item, index) => (
          <Col md={4} key={index}>
            <Card
              onClick={() => setSelezionato(item)}
              className={`mb-3 cursor-pointer ${
                selezionato.nome === item.nome ? "border-danger" : ""
              }`}
            >
              {tipo !== "aerodinamica" && (
                <Card.Img
                  variant="top"
                  src={item.img}
                  className="img-fluid w-100"
                  style={{ objectFit: "contain", aspectRatio: "16/9" }}
                />
              )}
              <Card.Body
                className="d-flex flex-column card_monoposto_page"
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
                  {item.nome}
                </Card.Title>
                {tipo === "motore" && (
                  <Card.Text>Potenza: {item.potenza} kW</Card.Text>
                )}
                {tipo === "telaio" && (
                  <Card.Text>Peso: {item.peso} kg</Card.Text>
                )}
                {tipo === "gomma" && <Card.Text>Grip: {item.grip}</Card.Text>}
                {tipo === "aerodinamica" && (
                  <>
                    <Card.Text>Deportanza: {item.deportanza}</Card.Text>
                    <Card.Text>Resistenza: {item.resistenza}</Card.Text>
                    <Card.Text
                      style={{ fontSize: "0.8em", fontStyle: "italic" }}
                    >
                      {item.descrizione}
                    </Card.Text>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default SelettoreCard;
