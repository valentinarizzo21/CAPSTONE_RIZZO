import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-white py-5 mt-5 bg_footer">
      <Container>
        <Row className="gy-4">
          <Col md={4} className="text-center text-md-start">
            <h3 className="h1 fw-light">Ferrari</h3>
            <p className="text-secondary">Passione, innovazione e velocità.</p>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <div className="d-flex flex-column text-center">
              <h4 className="fw-light">Esplora</h4>
              <a href="#" className="text-secondary text-decoration-none my-2">
                Home
              </a>
              <a href="#" className="text-secondary text-decoration-none my-2">
                Monoposto
              </a>
              <a href="#" className="text-secondary text-decoration-none my-2">
                Storia
              </a>
              <a href="#" className="text-secondary text-decoration-none my-2">
                Piloti
              </a>
              <a href="#" className="text-secondary text-decoration-none my-2">
                Risultati
              </a>
            </div>
            <div className="d-flex flex-column text-center ms-4">
              <h4 className="fw-light">Account</h4>
              <a href="#" className="text-secondary text-decoration-none my-2">
                News
              </a>
              <a href="#" className="text-secondary text-decoration-none my-2">
                Accedi
              </a>
              <a href="#" className="text-secondary text-decoration-none my-2">
                Prova le tue conoscenze
              </a>
              <a href="#" className="text-secondary text-decoration-none my-2">
                Lavora con noi
              </a>
              <a href="#" className="text-secondary text-decoration-none my-2">
                Contattaci
              </a>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <h4 className="fw-light">Seguici</h4>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#">
                <img
                  src="/assets/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <img
                  src="/assets/twitter.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <img
                  src="/assets/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </Col>
        </Row>

        <div className=" mt-4 pt-3 text-center text-secondary">
          <p className="m-0">
            <i>© 2025 Ferrari. Sito creato a fini istruzionali.</i>
          </p>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <a href="#" className="text-secondary text-decoration-none m-2">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary text-decoration-none m-2">
              Termini e Condizioni
            </a>
            <a href="#" className="text-secondary text-decoration-none m-2">
              Contattaci
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
