import { Button, Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";

const Home = () => {
  return (
    <Container fluid className="py-5 px-0">
      <Container>
        <h2>Discover the Hidden Gem of the Pacific</h2>
        <p>
          <b>Taniti</b> Taniti is a small, tropical Pacific island under 500 square miles, featuring a varied terrain.
            This includes sandy and rocky beaches, a safe, small harbor, lush rainforests, and a mountainous interior
            with a small, active volcano. The indigenous population is about 20,000, historically relying on fishing
            and agriculture before the recent rise in tourism.
        </p>
      </Container>
      <FeatureBlock
        title="A Taste of Taniti"
        image="../images/cuisine-home.png"
        cta={{ label: "Explore the Cuisine", link: "/cuisine" }}
      >
        <p>
            Begin a gastronomic journey through Taniti’s diverse food scene. Our cuisine is a celebration of local
            traditions and flavors, featuring the freshest seafood by the harbor and exotic fruits and spices from our
            rich soil. Experience authentic island life while dining in quaint shacks, upscale venues, or busy markets.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Stay in Paradise"
        image="../images/lodging-home.png"
        cta={{ label: "Book Your Stay", link: "/lodging" }}
        reverse
      >
        <p>
            Find your ideal Taniti lodging, from luxury resorts to intimate beachside bungalows. We offer a wide range
            of accommodations perfect for romantic escapes, family trips, or solo travel, suiting every budget. Wake up
            to breathtaking ocean views and enjoy our warm island hospitality in lush gardens.
        </p>
      </FeatureBlock>
      <Container fluid className="py-5 hero-bg home-cta-banner text-center">
        <h2 className="text-center text-light">Explore Taniti Today</h2>
        <p className="text-center text-light h4 mb-4">
          Plan your dream vacation to Taniti and experience the magic of the
          Pacific.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="text-light text-center"
          href="https://www.tripadvisor.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Book Now
        </Button>
      </Container>
      <FeatureBlock
        title="Experience the Island Life"
        image="../images/entertainment-home.png"
        cta={{ label: "Plan Your Adventure", link: "/entertainment" }}
      >
        <p>
            Taniti offers a wealth of activities all day long. Explore pristine beaches, vibrant reefs, and rainforests
            teeming with wildlife. Go diving or snorkeling, hike to hidden waterfalls, or just relax on the sand with a
            cocktail. Discover the island’s magic and make memories to last a lifetime.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Discover the Beauty of Taniti"
        image="../images/location-home.png"
        cta={{ label: "Explore the Island", link: "/locations" }}
        reverse
      >
        <p>
            Taniti is a paradise, waiting for your exploration, defined by stunning landscapes, rich culture, and
            welcoming people. Visit traditional villages, historic sites, and scenic viewpoints for breathtaking island
            views. Immerse yourself in the vibrant colors, sounds, and flavors of the Pacific's beauty.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Getting to and Around Taniti"
        image="../images/transportation-home.png"
        cta={{ label: "Start Your Journey", link: "/transportation" }}
      >
        <p>
            Getting to Taniti is simple, with frequent flights from regional cities. Upon arrival, you can travel the
            island by rental car, scooter, bike, or public transit. Discover hidden gems independently, or take a guided
            tour to learn about our history and nature. No matter your mode of travel, Taniti guarantees an unforgettable
            journey.
        </p>
      </FeatureBlock>
    </Container>
  );
};

export default Home;
