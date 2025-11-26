import { Container, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

type FeatureBlockProps = {
  title: string;
  children: React.ReactNode;
  image: string;
  reverse?: boolean;
  cta?: {
    label: string;
    link: string;
  };
};

const FeatureBlock = ({
  title,
  children,
  image,
  reverse = false,
  cta,
}: FeatureBlockProps) => {
  const imagePosition = reverse ? "order-lg-last" : "order-lg-first";
  const backgroundColor = reverse ? "grey-bg" : "";

  return (
    <Container fluid className={`${backgroundColor} py-5 px-0`}>
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            lg={6}
            className={`${imagePosition} text-center mb-5 mb-lg-0`}
          >
            <img
              src={image}
              alt={`${title} image`}
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col xs={12} lg={6}>
            <h2>{title}</h2>
            {children}
            {cta && (
              <NavLink to={cta.link}>
                <Button
                  variant="primary"
                  className="shadow text-light fw-bold px-3 py-2"
                >
                  {cta.label}
                </Button>
              </NavLink>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FeatureBlock;
