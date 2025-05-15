import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: 1,
    title: "Перевозка строительных материалов",
    description:
      "Доставка кирпича, бетонных блоков, плит и других строительных материалов прямо на объект.",
    icon: "PackageOpen",
  },
  {
    id: 2,
    title: "Монтаж и демонтаж конструкций",
    description:
      "Установка и демонтаж тяжелых конструкций, рекламных щитов, оборудования с высокой точностью.",
    icon: "Construction",
  },
  {
    id: 3,
    title: "Погрузка и разгрузка грузов",
    description:
      "Быстрая и безопасная погрузка/разгрузка тяжелых и негабаритных грузов в труднодоступных местах.",
    icon: "CircleDollarSign",
  },
  {
    id: 4,
    title: "Перевозка спецтехники",
    description:
      "Транспортировка мини-экскаваторов, компрессоров, генераторов и другой спецтехники.",
    icon: "Truck",
  },
  {
    id: 5,
    title: "Эвакуация автомобилей",
    description:
      "Быстрая эвакуация легковых и грузовых автомобилей с места поломки или аварии.",
    icon: "Car",
  },
  {
    id: 6,
    title: "Аренда манипулятора с оператором",
    description:
      "Предоставление манипулятора с опытным оператором для выполнения различных задач.",
    icon: "UserCheck",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-manipulator-gray-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-manipulator-primary">
            Наши услуги
          </h2>
          <p className="text-lg text-manipulator-gray-dark max-w-3xl mx-auto">
            Предоставляем полный спектр услуг по погрузке, перевозке и монтажу с
            использованием манипуляторов в Клину, Клинском районе с доставкой в
            Москву и другие направления
          </p>
          <p className="text-md text-manipulator-gray-dark max-w-3xl mx-auto mt-2">
            Выполняем заказы по всему Клинскому району с доставкой в любые
            направления, включая центр Москвы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="service-card">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="bg-manipulator-primary rounded-lg p-3 mr-4">
                    <Icon
                      name={service.icon}
                      className="card-icon text-white transition-colors duration-200"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-manipulator-gray-dark">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
