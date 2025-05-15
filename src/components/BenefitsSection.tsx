
import Icon from "@/components/ui/icon";

const benefits = [
  {
    title: "Собственный автопарк",
    description: "Мы располагаем собственным парком манипуляторов различной грузоподъемности, что позволяет нам обеспечивать быструю подачу техники и выполнять любые задачи.",
    icon: "TruckIcon"
  },
  {
    title: "Опытные операторы",
    description: "Все наши операторы имеют многолетний опыт работы и необходимые допуски к управлению спецтехникой, что гарантирует высокое качество и безопасность работ.",
    icon: "UserCheck"
  },
  {
    title: "Работаем 24/7",
    description: "Мы предоставляем услуги манипулятора круглосуточно и без выходных, включая срочные и экстренные вызовы в любое время дня и ночи.",
    icon: "Clock"
  },
  {
    title: "Прозрачные цены",
    description: "Фиксированные расценки на услуги и отсутствие скрытых платежей. Возможность расчета точной стоимости услуг перед началом работ.",
    icon: "Wallet"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section bg-gradient-blue text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают <span className="text-manipulator-secondary">нас</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Предоставляем качественные услуги манипулятора уже более 10 лет. 
            Наш опыт и профессионализм — ваша уверенность в результате.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start p-6 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="rounded-full bg-manipulator-secondary p-3 mr-4 flex-shrink-0">
                <Icon name={benefit.icon} className="text-manipulator-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-manipulator-secondary">
                  {benefit.title}
                </h3>
                <p className="text-gray-200">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-manipulator-secondary text-4xl font-bold mb-2">10+</div>
            <div className="text-gray-200">Лет опыта</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-manipulator-secondary text-4xl font-bold mb-2">15+</div>
            <div className="text-gray-200">Единиц техники</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-manipulator-secondary text-4xl font-bold mb-2">1000+</div>
            <div className="text-gray-200">Выполненных заказов</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-manipulator-secondary text-4xl font-bold mb-2">98%</div>
            <div className="text-gray-200">Довольных клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
