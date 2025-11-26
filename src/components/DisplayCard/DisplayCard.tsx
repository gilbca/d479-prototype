import { Card } from "react-bootstrap";
import { DataEntry } from "../../constants/constants";

const DisplayCard = ({
  category,
  name,
  description,
  cuisine,
  atmosphere,
  specialFeatures,
  image,
}: DataEntry) => {
  return (
    <Card style={{ width: "25rem" }} className="mb-5 shadow">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="mb-1 text-primary">{name}</Card.Title>
        <Card.Text as="small" className="d-block mb-2 text-muted fw-bold">
          {category}
          {cuisine ? ` // ${cuisine}` : ""}
        </Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="mt-auto">
        {atmosphere && (
          <Card.Text as="small">
            <b>Atmposphere:</b> {atmosphere}
          </Card.Text>
        )}
        {specialFeatures && (
          <Card.Text as="small">
            <p>
              <b>Features:</b> {specialFeatures}
            </p>
          </Card.Text>
        )}
      </Card.Footer>
    </Card>
  );
};

export default DisplayCard;
