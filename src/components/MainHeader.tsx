
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <a href="#" className="flex items-center">
            <Icon name="Truck" size={32} className={`mr-2 ${isScrolled ? 'text-manipulator-primary' : 'text-manipulator-secondary'}`} />
            <span className={`font-oswald text-xl font-bold ${isScrolled ? 'text-manipulator-primary' : 'text-white'}`}>
              МАНИПУЛЯТОР-СЕРВИС
            </span>
          </a>
          
          {/* Навигация */}
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className={`nav-link ${isScrolled ? 'text-manipulator-gray-dark' : 'text-white'} hover:text-manipulator-secondary transition-colors`}>
              Услуги
            </a>
            <a href="#benefits" className={`nav-link ${isScrolled ? 'text-manipulator-gray-dark' : 'text-white'} hover:text-manipulator-secondary transition-colors`}>
              Преимущества
            </a>
            <a href="#gallery" className={`nav-link ${isScrolled ? 'text-manipulator-gray-dark' : 'text-white'} hover:text-manipulator-secondary transition-colors`}>
              Галерея
            </a>
            <a href="#contacts" className={`nav-link ${isScrolled ? 'text-manipulator-gray-dark' : 'text-white'} hover:text-manipulator-secondary transition-colors`}>
              Контакты
            </a>
          </nav>
          
          {/* Контактная информация и кнопка */}
          <div className="flex items-center">
            <a href="tel:+79001234567" className={`hidden md:flex items-center mr-4 ${isScrolled ? 'text-manipulator-primary' : 'text-white'} font-medium`}>
              <Icon name="Phone" className="mr-2" />
              +7 (900) 123-45-67
            </a>
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
