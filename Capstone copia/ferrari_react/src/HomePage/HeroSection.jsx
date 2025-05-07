import React from "react";
import { Carousel } from "react-bootstrap";

function HeroSection() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_img"
            src="src/assets/img/Carousel_Item1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="title_hero">
              <h1>Ferrari: The Art of Speed</h1>
              <p className="h3 fw-lighter">
                Unveiling the power and precision of the Ferrari F1 cars.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_img carousel_img2"
            src="src/assets/img/Carousel_Item2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="title_hero">
              <h1>Speed, Precision, Passion</h1>
              <p className="h3 fw-lighter">
                Innovation meets passion in every Ferrari F1 race.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_img"
            src="src/assets/img/Carousel_Item3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="title_hero">
              <h1>The Road to Victory</h1>
              <p className="h3 fw-lighter">
                Join us in the quest for the next Formula 1 championship!
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;
