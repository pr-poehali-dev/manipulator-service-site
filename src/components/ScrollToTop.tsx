
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показывать кнопку, когда страница прокручена вниз на 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Функция прокрутки вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <Button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-manipulator-secondary hover:bg-yellow-500 text-black rounded-full shadow-lg p-3 h-12 w-12"
          aria-label="Прокрутить наверх"
        >
          <Icon name="ChevronUp" size={24} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
