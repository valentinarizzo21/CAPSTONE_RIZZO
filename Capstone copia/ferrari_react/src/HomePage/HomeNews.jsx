import { useEffect, useState, useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Bookmark, Clock } from "react-bootstrap-icons";

const HomeNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/NewsF1.json");
        if (!response.ok) {
          throw new Error("Errore nel caricamento delle news");
        }
        const data = await response.json();
        setNews(data.news);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        console.log(loading);
      }
    };

    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const title = document.querySelector(".title_four");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1700) {
        title.classList.add("show-title");
      } else {
        title.classList.remove("show-title");
      }
    });
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (titleRef.current) {
  //       if (window.scrollY > 1500) {
  //         titleRef.current.classList.add("show-title");
  //       } else {
  //         titleRef.current.classList.remove("show-title");
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  if (error) {
    return <p>Errore: {error}</p>;
  }

  return (
    <Container fluid className="px-5">
      <h1 ref={titleRef} className="fw-light my-5 title_four">
        Latest News
      </h1>
      <Row className="align-items-center flex-wrap-reverse">
        {news.map((article) => (
          <Col key={article.id} className="d-flex p-2" sm={12} md={8}>
            <div style={{ width: "70%" }}>
              <div className="text-white p-2 me-2">
                {article.logo && (
                  <img
                    src={article.logo}
                    alt="Logo"
                    className="rounded-circle me-2"
                    width={30}
                    height={30}
                  />
                )}
                <span className="text-sm">
                  <i>
                    {article.autore} - {article.data}
                  </i>
                </span>

                <div className="d-flex justify-content-end align-items-baseline">
                  <Clock className="me-2" />
                  <p className="text-sm text-gray-600 mt-1 m-0 p-0">
                    {article.tempo_lettura}
                  </p>
                </div>
                <div className="d-flex flex-column">
                  <h3 className="text-lg font-semibold overflow-hidden title_news">
                    {article.titolo}
                  </h3>
                  <p className="my-2 overflow-scroll" style={{ height: "8vh" }}>
                    {article.anteprima}
                  </p>
                  <Bookmark size={20} className="my-2 align-self-end" />
                </div>
                <div className="d-flex">
                  <Button className="btn_vedipiu">
                    <div className="d-flex justify-content-between align-content-baseline">
                      Leggi di più
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{ width: "250px" }}
              className="d-flex justify-content-center"
            >
              <img
                src={article.copertina}
                alt={article.titlo}
                className="rounded-2 align-self-center"
                style={{ width: "100%", height: "160px" }}
              />
            </div>
          </Col>
        ))}

        <Col sm={12} md={4}>
          <h4 className="text-white fw-light mb-4">Sponsor:</h4>
          <div className="d-flex flex-wrap justify-content-center g-3">
            <img
              src="src/assets/img/Partnership/F1Logo.png"
              alt="LogoF1"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/AwsLogo.png"
              alt="LogoAws"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/GenesisLogo.png"
              alt="LogoGenesis"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/GiorgioArmaniLogo.png"
              alt="LogoGiorgioArmani"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/HpLogo.png"
              alt="LogoHp"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/IbmLogo.png"
              alt="LogoIbm"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/IvecoLogo.png"
              alt="LogoIveco"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/PirelliLogo.png"
              alt="LogoPirelli"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/PumaLogo.png"
              alt="LogoPuma"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/RayBanLogo.png"
              alt="LogoRayban"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/ShellLogo.png"
              alt="LogoShell"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
            <img
              src="src/assets/img/Partnership/UnicreditLogo.png"
              alt="LogoUnicredit"
              style={{ maxWidth: "80px", height: "auto" }}
              className="m-1"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeNews;
