import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

type ExploreMoreCardProps = {
  to: string;
  text: string;
};
const ExploreMoreCard = ({ to, text }: ExploreMoreCardProps) => {
  return (
    <Card
      style={{ width: "25rem" }}
      className="mb-5 shadow justify-content-center align-items-center grey-bg grow"
    >
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="mb-1 text-primary">Learn More</Card.Title>
        <Card.Text as="small" className="d-block mb-2 text-muted fw-bold">
          See what else the Island has to offer
        </Card.Text>
        <NavLink to={`/${to}`}>
          <Button variant="primary">{text}</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default ExploreMoreCard;
