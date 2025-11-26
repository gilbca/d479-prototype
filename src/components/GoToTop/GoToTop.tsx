import { useState, useEffect } from "react";

/**
 * A button that scrolls to the top of the page when clicked, visible when the user scrolls down the page.
 * @returns JSX.Element
 */
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollLocation = 300;

  const toggleVisibility = () => {
    if (window.scrollY > scrollLocation) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => toggleVisibility();

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="goto-top" title="Scroll to Top">
      {isVisible && (
        <div className="top orange-bg shadow" onClick={scrollToTop}>
          <img
            src="../images/caret-up-icon.png"
            alt="Scroll to Top"
            width="15"
            height="10"
          />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
