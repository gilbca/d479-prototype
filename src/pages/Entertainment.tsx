import { Container } from "react-bootstrap";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import Slideshow, { SlideshowData } from "../components/Slideshow/Slideshow";

const Entertainment = () => {
  const slides: SlideshowData[] = [
    {
      image: "entertainment-slide-1.png",
      heading: "Golf",
      text: "Coming soon to Taniti: a world-class golf course that will challenge and delight golfers of all levels. Stay tuned for more details!",
    },
    {
      image: "entertainment-slide-2.png",
      heading: "Local Music",
      text: "Taniti's music scene is as diverse as its landscapes. From traditional drum circles to modern pop concerts, there's always something to see and hear. Join us for a night of music and dancing under the stars.",
    },
    {
      image: "entertainment-slide-3.png",
      heading: "Dance Clubs",
      text: "Get your groove on at Taniti's hottest dance clubs. With live DJs, themed nights, and plenty of room to move, you'll be dancing until dawn.",
    },
  ];

  return (
    <Container fluid className="pt-5 px-0">
      <Container className="pb-5">
        <h2>Taniti's Adventures and Nightlife</h2>
        <p>
            Taniti is more than beautiful scenery; it offers endless activities for every taste.
            Entertainment ranges from thrilling rainforest zip-lining to relaxing evenings in local pubs.
            Immerse yourself in our culture at museums, explore vibrant marine life by snorkeling, or enjoy
            a round of golf. Find the top entertainment picks below to ensure your entire trip is unforgettable.
        </p>
      </Container>
      <FeatureBlock
        title="Underwater Wonders"
        image="../images/entertainment-underwater.png"
      >
        <p>
            Experience the ocean's wonders in Taniti's crystal-clear waters. Go snorkeling to see
            colorful coral reefs and vibrant marine life. Taniti is truly a snorkeler's paradise,
            welcoming both beginners and experienced enthusiasts to explore its underwater landscapes.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Thrill in the Canopy"
        image="../images/entertainment-canopy.png"
        reverse
      >
        <p>
            Take your Taniti adventure to new heights with exhilarating zip-lining through the lush rainforests.
            Glide above the canopy for stunning aerial views and the sounds of exotic birds. This activity offers
            a truly unforgettable perspective of the island.
        </p>
      </FeatureBlock>
      <FeatureBlock
        title="Taniti Nightlife"
        image="../images/entertainment-nightlife.png"
      >
        <p>
            As the sun goes down, Taniti's nightlife ignites with energy. You can choose from cozy pubs offering
            local brews or dance clubs where the party lasts until morning. Come join us to unwind, celebrate, and
            dance the night away—there is a perfect spot for every mood.
        </p>
      </FeatureBlock>

      <FeatureBlock
        title="Journey Through History"
        image="../images/entertainment-history.png"
        reverse
      >
        <p>
            Step into the past at Taniti’s Local History Museum. Explore exhibits that chronicle our island's story,
            spanning from ancient times to today. It is a fascinating look for anyone—from history enthusiasts to
            curious visitors—seeking to understand Taniti’s heart and soul.
        </p>
      </FeatureBlock>
      <Slideshow slides={slides} />
    </Container>
  );
};

export default Entertainment;
