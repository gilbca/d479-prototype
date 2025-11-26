import { Col, Container, Row } from "react-bootstrap";
import { cuisineData } from "../constants/constants";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import ExploreMoreCard from "../components/ExploreMoreCard/ExploreMoreCard";
import Slideshow from "../components/Slideshow/Slideshow";
import { SlideshowData } from "../components/Slideshow/Slideshow";

const Cuisine = () => {
  const slides: SlideshowData[] = [
    {
      image: "cuisine-slide-1.png",
      heading: "Discover the Flavors of Taniti",
      text: "Start a tasty adventure across Taniti, where different flavors and smells bring to life our island's culture and natural gifts. Enjoy fresh seafood at our cozy beachside spots or check out the colorful fruits and veggies at our markets. Whether you're enjoying today's fresh catch, trying out local dishes, or grabbing groceries to make your own meals, you'll see our food is as welcoming as our views. Check out the guides below for the best places to eat and shop in Taniti, each offering something special to make your stay memorable.",
    },
    {
      image: "cuisine-slide-2.png",
      heading: "Restaurants",
      text: "Check out the best restaurants in Taniti, where you can enjoy fresh seafood, local dishes, and more. Each spot offers a unique atmosphere and special features to make your dining experience memorable.",
    },
    {
      image: "cuisine-slide-3.png",
      heading: "Local Shopping",
      text: "Discover the best places to shop in Taniti, where you can find fresh produce, local goods, and more. Each spot offers something special to make your shopping experience memorable.",
    },
  ];

  return (
    <>
      <Container fluid className="py-5 px-0">
        <Container className="pb-5">
          <h2>Taste of Taniti</h2>
          <p>
            Embark on a culinary journey across Taniti, where the diverse aromas
            and flavors are a vibrant reflection of our island's culture and natural bounty.
            Indulge in the freshest seafood at intimate beachside restaurants, or explore the
            rich variety of colorful produce available at our local markets. Whether you prefer
            sampling the catch of the day, savoring traditional Tanitian dishes, or purchasing
            ingredients to cook your own meal, our food scene is as inviting as our stunning landscapes.
            Consult the guides below for a curated list of Taniti's top dining and shopping destinations,
            guaranteeing a unique and memorable gastronomic experience.
          </p>
        </Container>
        <Container
          fluid
          className="d-flex justify-content-center align-items-center blue-bg py-3 "
        >
          <h2 className="text-light">Restaurants</h2>
        </Container>
        <Container className="pt-5">
          <Row>
            {cuisineData.map(
              (cuisine, index) =>
                cuisine.category === "Restaurant" && (
                  <Col key={index} className="d-flex">
                    <DisplayCard
                      category={cuisine.category}
                      name={cuisine.name}
                      cuisine={cuisine.cuisine}
                      description={cuisine.description}
                      atmosphere={cuisine.atmosphere}
                      specialFeatures={cuisine.specialFeatures}
                      image={cuisine.image}
                    />
                  </Col>
                )
            )}
          </Row>
        </Container>
        <Container
          fluid
          className="d-flex justify-content-center align-items-center blue-bg py-3 "
        >
          <h2 className="text-light">Local Shopping</h2>
        </Container>
        <Container className="pt-5">
          <Row>
            {cuisineData.map(
              (cuisine, index) =>
                cuisine.category !== "Restaurant" && (
                  <Col
                    lg={4}
                    key={index}
                    className="d-flex align-items-stretch"
                  >
                    <DisplayCard
                      category={cuisine.category}
                      name={cuisine.name}
                      cuisine={cuisine.cuisine}
                      description={cuisine.description}
                      atmosphere={cuisine.atmosphere}
                      specialFeatures={cuisine.specialFeatures}
                      image={cuisine.image}
                    />
                  </Col>
                )
            )}
            <Col lg={4} className="d-flex">
              <ExploreMoreCard to="lodging" text="Find a Place to Stay" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Slideshow slides={slides} />
    </>
  );
};

export default Cuisine;
