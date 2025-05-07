import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import SelettoreCard from "./SelettoreCard";
import {
  motori,
  telai,
  gomme,
  circuiti,
  configurazioniAerodinamiche,
} from "./GameData";

const getRandomCircuit = () => {
  const circuito = circuiti[Math.floor(Math.random() * circuiti.length)];
  const difficolta = 0.7 + Math.random() * 0.2;
  const tempoTarget = circuito.lunghezza * 18 * difficolta;
  return { ...circuito, tempoTarget };
};

const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  const ms = Math.round((seconds % 1) * 1000);
  return `${min}:${sec.toString().padStart(2, "0")}.${ms
    .toString()
    .padStart(3, "0")}`;
};

const F1LapTimeGame = () => {
  const [motore, setMotore] = useState(motori[0]);
  const [telaio, setTelaio] = useState(telai[0]);
  const [gomma, setGomma] = useState(gomme[0]);
  const [carburante, setCarburante] = useState(50);
  const [tempoGiro, setTempoGiro] = useState(null);
  const [circuito, setCircuito] = useState(getRandomCircuit());
  const [esito, setEsito] = useState(null);
  const [temperaturaAsfalto, setTemperaturaAsfalto] = useState(
    Math.floor(Math.random() * (42 - 25 + 1)) + 25
  );
  const [aerodinamica, setAerodinamica] = useState(
    configurazioniAerodinamiche[1]
  );

  const calcolaTempoGiro = () => {
    const densitaAria = 1.225;
    const coeffResistenza = 0.7;
    const velocitaStimataKmH = circuito.curve > 15 ? 180 : 300;
    const velocitaStimata = velocitaStimataKmH / 3.6;
    const areaFrontale = 1.6;
    // const temperaturaAsfalto = Math.floor(Math.random() * (42 - 25 + 1)) + 25;
    setTemperaturaAsfalto(temperaturaAsfalto);

    const resistenzaAria =
      0.5 *
      coeffResistenza *
      densitaAria *
      Math.pow(velocitaStimata, 2) *
      areaFrontale;

    const potenzaAerodinamica = resistenzaAria * velocitaStimata;
    const potenzaMotore = motore.potenza * 1000;
    const potenzaEffettiva = Math.max(potenzaMotore - potenzaAerodinamica, 0);
    const potenzaFattore = potenzaEffettiva / 1000;
    const pesoTotale = telaio.peso + carburante;
    const pesoFattore = telaio.peso / pesoTotale;

    const deltaTemp = temperaturaAsfalto - 30;
    const gripTemperatura = 1 - Math.pow(deltaTemp / 20, 2);
    const gripFattore = gomma.grip * Math.max(gripTemperatura, 0);

    const curveFattore = Math.log(circuito.curve) / Math.log(20);
    const deportanzaRichiesta = circuito.curve / 25;
    const deportanzaFattore = aerodinamica.deportanza / deportanzaRichiesta;

    const baseTime = (circuito.lunghezza * 1000) / velocitaStimata;

    const tempo =
      (baseTime /
        (potenzaFattore *
          pesoFattore *
          gripFattore *
          (1 - curveFattore + deportanzaFattore))) *
      1000.4;

    setTempoGiro(tempo);

    setEsito(
      tempo < circuito.tempoTarget ? (
        <div style={{ textAlign: "center", color: "#F1C232" }}>
          <h3>🏆 Hai vinto! 🏆</h3>
          <p style={{ fontSize: "1.2em", color: "#D32F2F" }}>
            Complimenti, sei il campione! 🔥
          </p>
        </div>
      ) : tempo < circuito.tempoTarget * 1.05 ? (
        <div style={{ textAlign: "center", color: "#F1C232" }}>
          <h3>🚗 Quasi! Riprova! 🚗</h3>
          <p style={{ fontSize: "1.2em", color: "#F57C00" }}>
            Un piccolo passo da campione! Continua così! 🔥
          </p>
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "#F1C232" }}>
          <h3>❌ Ritenta! ❌</h3>
          <p style={{ fontSize: "1.2em", color: "#B71C1C" }}>
            Non arrenderti, la prossima volta sarà meglio! 💪
          </p>
        </div>
      )
    );
  };

  const nuovaSfida = () => {
    setCircuito(getRandomCircuit());
    setTempoGiro(null);
    setEsito(null);
    setAerodinamica(configurazioniAerodinamiche[1]);
  };

  return (
    <>
      <Card className="gameSection p-4 w-100 max-w-lg mx-auto mt-5">
        <Card.Body>
          <h2 className="text-xl font-bold mb-4 text-center">F1 Challenge</h2>
          <Card className="mb-4 p-3 bg-light text-center">
            <div className="d-flex flex-column align-items-center gap-3">
              <h1>{circuito.nome}</h1>
              <div
                className="bg_gamecircuit d-flex justify-content-center align-items-center"
                style={{ height: "220px" }}
              >
                <img
                  src={circuito.img}
                  alt="img_circuito"
                  width={200}
                  height={200}
                />
              </div>
              <p>Lunghezza: {circuito.lunghezza} km</p>
              <p>Curve: {circuito.curve}</p>
              <p>🌡️ Temperatura Asfalto: {temperaturaAsfalto}°C</p>
              <p className="h4 fw-light">
                Tempo da battere: {formatTime(circuito.tempoTarget)}
              </p>
            </div>
          </Card>

          <SelettoreCard
            titolo="Motore"
            opzioni={motori}
            selezionato={motore}
            setSelezionato={setMotore}
            tipo="motore"
          />

          <SelettoreCard
            titolo="Telaio"
            opzioni={telai}
            selezionato={telaio}
            setSelezionato={setTelaio}
            tipo="telaio"
          />

          <SelettoreCard
            titolo="Gomme"
            opzioni={gomme}
            selezionato={gomma}
            setSelezionato={setGomma}
            tipo="gomma"
          />

          <SelettoreCard
            titolo="Configurazione Aerodinamica"
            opzioni={configurazioniAerodinamiche}
            selezionato={aerodinamica}
            setSelezionato={setAerodinamica}
            tipo="aerodinamica"
          />

          <Form.Group className="mt-4 d-flex flex-column align-items-center">
            <Form.Label className="my-3 h4 fw-normal">
              Carburante (kg)
            </Form.Label>
            <Form.Control
              type="number"
              value={carburante}
              className="w-25"
              onChange={(e) => setCarburante(parseFloat(e.target.value))}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button className="mt-4 btn_vedipiu" onClick={calcolaTempoGiro}>
              VAI!
            </Button>
          </div>
          {tempoGiro !== null && (
            <>
              <p className="mt-4 text-center">
                Il tuo tempo: <strong>{formatTime(tempoGiro)}</strong>
              </p>
              <div className="text-center text-success">{esito}</div>
              <div className="d-flex justify-content-center">
                <Button
                  variant="secondary"
                  className=" mt-4 btn_vedipiu"
                  onClick={nuovaSfida}
                >
                  Nuova sfida
                </Button>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default F1LapTimeGame;
