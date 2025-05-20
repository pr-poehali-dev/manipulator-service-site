import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      className="relative bg-manipulator-primary py-16 md:py-24" // Уменьшил padding с py-32 до py-16
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1572055030992-35981b2f0eca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Тёмный оверлей для читаемости текста */}
      <div className="absolute inset-0 bg-manipulator-primary opacity-80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Манипулятор в аренду от EVO - транс
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Предоставляем услуги манипулятора в Москве и области. Качественно,
            быстро, по доступным ценам.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contacts"
              className="bg-manipulator-secondary hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-medium inline-flex items-center justify-center"
            >
              Заказать манипулятор
              <Icon name="ArrowRight" className="ml-2" />
            </a>
            <a
              href="#services"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center"
            >
              Узнать цены
              <Icon name="ExternalLink" className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Преимущества в шапке */}
      <div className="container mx-auto px-4 relative z-10 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 p-4 rounded-lg flex items-center">
            <div className="bg-manipulator-secondary p-3 rounded-full mr-4">
              <Icon name="Clock" className="text-black" size={24} />
            </div>
            <div>
              <h3 className="text-white font-medium">Работаем 24/7</h3>
              <p className="text-white text-sm opacity-80">
                Доступны в любое время
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-4 rounded-lg flex items-center">
            <div className="bg-manipulator-secondary p-3 rounded-full mr-4">
              <Icon name="Truck" className="text-black" size={24} />
            </div>
            <div>
              <h3 className="text-white font-medium">Современная техника</h3>
              <p className="text-white text-sm opacity-80">
                Мощные манипуляторы
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 p-4 rounded-lg flex items-center">
            <div className="bg-manipulator-secondary p-3 rounded-full mr-4">
              <Icon name="CheckCircle" className="text-black" size={24} />
            </div>
            <div>
              <h3 className="text-white font-medium">Гарантия качества</h3>
              <p className="text-white text-sm opacity-80">Опытные операторы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
