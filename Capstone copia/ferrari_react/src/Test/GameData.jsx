// src/data/carData.js

export const motori = [
  { nome: "Motore A", potenza: 900, img: "src/assets/img/Gioco/motore_a.png" },
  { nome: "Motore B", potenza: 950, img: "src/assets/img/Gioco/motore_b.png" },
  { nome: "Motore C", potenza: 1000, img: "src/assets/img/Gioco/motore_c.png" },
];

export const telai = [
  { nome: "Telaio A", peso: 750, img: "src/assets/img/Gioco/Telaio1.png" },
  { nome: "Telaio B", peso: 730, img: "src/assets/img/Gioco/Telaio2.png" },
  { nome: "Telaio C", peso: 710, img: "src/assets/img/Gioco/Telaio3.png" },
];

export const gomme = [
  { nome: "Soft", grip: 1.2, img: "src/assets/img/Gioco/soft.webp" },
  { nome: "Medium", grip: 1.0, img: "src/assets/img/Gioco/medium.webp" },
  { nome: "Hard", grip: 0.8, img: "src/assets/img/Gioco/hard.webp" },
];

export const circuiti = [
  {
    nome: "Monza",
    lunghezza: 5.793,
    curve: 11,
    img: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Circuit_Monza.png",
  },
  {
    nome: "Silverstone",
    lunghezza: 5.891,
    curve: 18,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Circuit_Silverstone_2011.svg/2560px-Circuit_Silverstone_2011.svg.png",
  },
  {
    nome: "Spa",
    lunghezza: 7.004,
    curve: 19,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Spa-Francorchamps_of_Belgium.svg/500px-Spa-Francorchamps_of_Belgium.svg.png",
  },
  {
    nome: "Suzuka",
    lunghezza: 5.807,
    curve: 18,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Suzuka_circuit_map--2005.svg/500px-Suzuka_circuit_map--2005.svg.png",
  },
  {
    nome: "Interlagos",
    lunghezza: 4.309,
    curve: 15,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_%28AKA_Interlagos%29_track_map.svg/500px-Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_%28AKA_Interlagos%29_track_map.svg.png",
  },
  {
    nome: "Circuit of the Americas",
    lunghezza: 5.513,
    curve: 20,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_circuit.svg/500px-Austin_circuit.svg.png",
  },
  {
    nome: "Marina Bay",
    lunghezza: 5.063,
    curve: 23,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Marina_Bay_circuit_2023.svg/2560px-Marina_Bay_circuit_2023.svg.png",
  },
  {
    nome: "Zandvoort",
    lunghezza: 4.259,
    curve: 14,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Zandvoort_Circuit.png/1920px-Zandvoort_Circuit.png",
  },
];

export const configurazioniAerodinamiche = [
  {
    nome: "Low Downforce",
    deportanza: 1.0,
    resistenza: 0.4,
    descrizione: "Ottima velocità sui rettilinei, ma poca aderenza in curva.",
  },
  {
    nome: "Balanced",
    deportanza: 1.5,
    resistenza: 0.6,
    descrizione:
      "Equilibrata, adatta a tracciati misti con curve e rettilinei.",
  },
  {
    nome: "High Downforce",
    deportanza: 2.0,
    resistenza: 0.8,
    descrizione: "Massima aderenza in curva, ma velocità di punta più bassa.",
  },
];
