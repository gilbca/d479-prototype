import Carousel from "react-bootstrap/Carousel";

export type SlideshowData = {
  image: string;
  heading: string;
  text: string;
};

type SlideshowProps = { slides: SlideshowData[] };

const Slideshow = ({ slides }: SlideshowProps) => {
  return (
    <Carousel fade className="w-100">
      {slides.map((slide, index) => (
        <Carousel.Item className="bg-dark" key={index}>
          <img
            src={`../images/${slide.image}`}
            alt="First slide"
            className="d-block w-100 opacity-25"
          />
          <Carousel.Caption>
            <h3>{slide.heading}</h3>
            <p>{slide.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slideshow;
