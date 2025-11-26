import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from "./PageHero.module.scss";

type heroContent = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

const PageHero = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const title = currentPath.split("/")[1];
  let heroContent: heroContent = {
    title,
    subtitle: "",
    backgroundImage: `${title}-hero hero-bg`,
  };

  switch (currentPath) {
    case "/":
      heroContent = {
        ...heroContent,
        title: "Welcome to Taniti",
        subtitle: "Explore the beauty of the Pacific Islands",
      };
      break;
    case "/cuisine":
      heroContent = {
        ...heroContent,
        subtitle: "Experience the unique flavors of the Island",
      };
      break;
    case "/lodging":
      heroContent = {
        ...heroContent,
        subtitle: "Find the perfect place to stay",
      };
      break;
    case "/entertainment":
      heroContent = {
        ...heroContent,
        subtitle: "Experience the Island from sunrise to sunset",
      };
      break;
    case "/locations":
      heroContent = {
        ...heroContent,
        subtitle: "Uncover the beauty of the Island",
      };
      break;
    case "/transportation":
      heroContent = {
        ...heroContent,
        subtitle: "Getting to and around the Island",
      };
      break;
    case "/faq":
      heroContent = {
        ...heroContent,
        title: "FAQ",
        subtitle: "Frequently Asked Questions",
      };
      break;
    case "/contact":
      heroContent = {
        ...heroContent,
        title: "Contact Us",
        subtitle: "Get in touch!",
      };
      break;

    default:
      return;
  }

  return (
    <Container
      fluid
      className={`px-0 d-flex justify-content-center page-hero ${
        currentPath === "/" ? "home" : title
      }-hero hero-bg`}
    >
      <Row className={styles.rowBG}>
        <Col
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          {heroContent.title && (
            <h1
              className={`${currentPath === "/" ? "" : styles.capitalize} ${
                styles.heading
              }`}
            >
              {heroContent.title}
            </h1>
          )}
          {heroContent.subtitle && (
            <em className={styles.subHeading}>{heroContent.subtitle}</em>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PageHero;
