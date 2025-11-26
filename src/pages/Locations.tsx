import { Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Locations = () => {
  const slides: SlideshowData[] = [
    {
      image: "locations-slide-1.png",
      heading: "Signature Landscapes",
      text: "Discover the natural beauty of Taniti with our guided tours of the island's most iconic landscapes. From the lush rainforests to the crystal-clear waters, Taniti is a paradise waiting to be explored.",
    },
    {
      image: "locations-slide-2.png",
      heading: "Hidden Gems",
      text: "Explore the hidden gems of Taniti with our guided tours of the island's best-kept secrets. From secluded beaches to hidden waterfalls, Taniti is full of surprises waiting to be uncovered.",
    },
    {
      image: "locations-slide-3.png",
      heading: "Guided Tours",
      text: "Embark on a guided tour of Taniti with our experienced guides. Whether you're looking for adventure or relaxation, our tours are designed to give you an unforgettable experience of our island's beauty.",
    },
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
        <h2>Discover Our Signature Landscapes and Landmarks</h2>
        <p>
            Venture past the shores to discover Taniti's true character. From the lively streets of Taniti City with its
            native buildings, to the calm beauty of Yellow Leaf Bay, every spot holds a story. Take scenic boat or bus
            tours, hike through ancient rainforests, or view the active volcano. Explore the guide below for the unforgettable
            sights that make Taniti unique.
        </p>
      </Container>
      <FeatureBlock
        title="Island Tours"
        image="../images/locations-boat-tours.png"
      >
        <p>
            Discover the diversity of Taniti through our guided boat and bus tours. Each trip offers a unique perspective,
            showcasing the lush landscapes, hidden gems, and lively communities. Our tours are designed for a
            comprehensive experience of Taniti's beauty, whether you seek adventure or peace.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Explore Taniti City"
        image="../images/locations-city.png"
        reverse
      >
        <p>
            Taniti City, the heart of our island, welcomes you with a unique blend of native architecture and the
            natural beauty of the white, sandy beaches along Yellow Leaf Bay. Wander the lively streets to soak in
            culture and history, then relax on the beaches just a stone's throw from the city's bustle.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Volcano Visits"
        image="../images/locations-volcano.png"
      >
        <p>
            Stand in awe of Taniti’s active volcano, a testament to the island's powerful natural forces. You can safely
            visit this majestic wonder to learn its geological history and enjoy unforgettable panoramic views. It’s a
            true journey into nature’s power and beauty.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Rainforest Adventures"
        image="../images/locations-rainforest.png"
        reverse
      >
        <p>
            Immerse yourself in Taniti's verdant rainforests via guided hikes. These reveal a lush paradise, where you
            can encounter exotic plants and animals and find hidden waterfalls. Feel the deep serenity of nature as you
            connect with the natural world.
        </p>
      </FeatureBlock>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Locations;
