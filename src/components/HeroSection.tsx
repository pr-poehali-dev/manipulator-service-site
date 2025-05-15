import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div
        className="absolute inset-0 w-full h-full z-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588495752527-77d65c21f7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Услуги манипулятора{" "}
            <span className="text-manipulator-secondary">
              в Клину и Клинском районе
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-100">
            Быстрая подача техники, опытные операторы и выгодные цены. Доставка
            грузов в Москву и другие направления. Работаем с частными и
            юридическими лицами.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-manipulator-secondary hover:bg-yellow-500 text-black text-lg py-6 px-8">
              Рассчитать стоимость
              <Icon name="Calculator" className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/20 text-lg py-6 px-8"
            >
              Наши услуги
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
          </div>

          {/* Краткие преимущества */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="bg-manipulator-secondary rounded-full p-3 mr-4">
                <Icon name="Clock" className="text-manipulator-primary" />
              </div>
              <div>
                <h3 className="font-medium">Быстрая подача</h3>
                <p className="text-sm text-gray-200">От 30 минут</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-manipulator-secondary rounded-full p-3 mr-4">
                <Icon name="Award" className="text-manipulator-primary" />
              </div>
              <div>
                <h3 className="font-medium">Опытные специалисты</h3>
                <p className="text-sm text-gray-200">Стаж от 5 лет</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-manipulator-secondary rounded-full p-3 mr-4">
                <Icon name="Wallet" className="text-manipulator-primary" />
              </div>
              <div>
                <h3 className="font-medium">Доступные цены</h3>
                <p className="text-sm text-gray-200">Без скрытых платежей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
