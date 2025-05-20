import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <a href="#" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/files/29880550-5e98-4f68-b09e-9f8cf14b1bf1.jpeg"
              alt="EVO - транс логотип"
              className="h-20 mr-3" /* Увеличил размер логотипа в 2 раза: с h-10 на h-20 */
            />
            <span
              className={`font-oswald text-2xl font-bold ${isScrolled ? "text-manipulator-primary" : "text-white"}`} /* Увеличил размер шрифта с text-xl на text-2xl */
            >
              EVO - транс
            </span>
          </a>

          {/* Навигация */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#services"
              className={`nav-link ${isScrolled ? "text-manipulator-gray-dark" : "text-white"} hover:text-manipulator-secondary transition-colors"`}
            >
              Услуги
            </a>
            <a
              href="#benefits"
              className={`nav-link ${isScrolled ? "text-manipulator-gray-dark" : "text-white"} hover:text-manipulator-secondary transition-colors"`}
            >
              Преимущества
            </a>
            <a
              href="#gallery"
              className={`nav-link ${isScrolled ? "text-manipulator-gray-dark" : "text-white"} hover:text-manipulator-secondary transition-colors"`}
            >
              Галерея
            </a>
            <a
              href="#contacts"
              className={`nav-link ${isScrolled ? "text-manipulator-gray-dark" : "text-white"} hover:text-manipulator-secondary transition-colors"`}
            >
              Контакты
            </a>
          </nav>

          {/* Контактная информация и кнопка */}
          <div className="flex items-center">
            <div className="hidden md:flex flex-col items-end mr-4">
              <a
                href="tel:+89253645581"
                className={`flex items-center ${isScrolled ? "text-manipulator-primary" : "text-white"} font-medium text-lg`}
              >
                <Icon name="Phone" className="mr-2" />8 (925) 364-55-81
              </a>
              <div className="flex space-x-2 mt-1">
                <a
                  href="https://wa.me/79253645581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm ${isScrolled ? "text-green-600" : "text-white"} hover:text-green-400`}
                >
                  <Icon name="MessageCircle" size={16} className="mr-1" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/+79253645581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-sm ${isScrolled ? "text-blue-500" : "text-white"} hover:text-blue-400`}
                >
                  <Icon name="Send" size={16} className="mr-1" />
                  <span>Telegram</span>
                </a>
              </div>
              {/* Удален второй телефон 8 (929) 989-11-21 */}
            </div>
            <Button className="bg-manipulator-secondary hover:bg-yellow-500 text-black">
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
