import { Container, Row, Col } from "react-bootstrap";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import { lodgingData } from "../constants/constants";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Lodging = () => {
  
  const slides: SlideshowData[] = [
    {
      image: "lodging-slide-1.png",
      heading: "Find Your Perfect Spot",
      text: "Whether you're looking for a cozy bed and breakfast, a luxurious resort, or a rustic cabin, we have something for everyone. Our lodging options are as diverse as our landscapes, so you can choose the perfect place to relax and unwind after a day of adventure. Check out the guides below for the best places to stay on Taniti, each offering something special to make your stay memorable.",
    },
    {
      image: "lodging-slide-2.png",
      heading: "Hotels",
      text: "Check out the best hotels in Taniti, where you can enjoy luxurious amenities, stunning views, and top-notch service. Each spot offers a unique atmosphere and special features to make your stay memorable.",
    },
    {
      image: "lodging-slide-3.png",
      heading: "Bed and Breakfasts",
      text: "Discover the best bed and breakfasts in Taniti, where you can enjoy cozy accommodations, homemade breakfasts, and personalized service. Each spot offers something special to make your stay memorable.",
    },
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
        <h2>Find Your Perfect Spot</h2>
        <p>
            From cozy bed and breakfasts to luxurious resorts or rustic cabins, we offer lodging for everyone.
            Our accommodation options are as diverse as our landscapes, ensuring you find the perfect place to unwind
            post-adventure. Consult the guides below for the best places to stay, each providing a memorable experience.
        </p>
      </Container>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center blue-bg py-3 "
      >
        <h2 className="text-light">Places to Stay</h2>
      </Container>
      <Container className="pt-5">
        <Row>
          {lodgingData.map((lodging, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <DisplayCard
                category={lodging.category}
                name={lodging.name}
                description={lodging.description}
                atmosphere={lodging.atmosphere}
                specialFeatures={lodging.specialFeatures}
                image={lodging.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Lodging;
