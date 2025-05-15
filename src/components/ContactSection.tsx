import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contacts" className="section bg-manipulator-gray-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Контактная информация */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-manipulator-primary">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-manipulator-gray-dark mb-8">
              Наши специалисты ответят на все ваши вопросы, рассчитают стоимость
              и подберут оптимальный манипулятор для ваших задач.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-manipulator-primary rounded-full p-3 mr-4 flex-shrink-0">
                  <Icon name="Phone" className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+89253645581"
                      className="block text-manipulator-primary hover:text-manipulator-secondary transition-colors"
                    >
                      8 (925) 364-55-81
                    </a>
                    <a
                      href="tel:+89032074092"
                      className="block text-manipulator-primary hover:text-manipulator-secondary transition-colors"
                    >
                      8 (903) 207-40-92
                    </a>
                  </div>
                  <p className="text-sm text-manipulator-gray-dark mt-1">
                    Ежедневно с 8:00 до 22:00
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-manipulator-primary rounded-full p-3 mr-4 flex-shrink-0">
                  <Icon name="Mail" className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:info@manipulator-service.ru"
                    className="text-manipulator-primary hover:text-manipulator-secondary transition-colors"
                  >
                    info@manipulator-service.ru
                  </a>
                  <p className="text-sm text-manipulator-gray-dark mt-1">
                    Отвечаем в течение 1 часа
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-manipulator-primary rounded-full p-3 mr-4 flex-shrink-0">
                  <Icon name="MapPin" className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-manipulator-gray-dark">
                    г. Москва, ул. Примерная, д. 123
                  </p>
                  <p className="text-sm text-manipulator-gray-dark mt-1">
                    Пн-Пт: 9:00-18:00
                  </p>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-manipulator-primary text-white hover:bg-manipulator-secondary hover:text-manipulator-primary p-3 rounded-full transition-colors"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="bg-manipulator-primary text-white hover:bg-manipulator-secondary hover:text-manipulator-primary p-3 rounded-full transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="bg-manipulator-primary text-white hover:bg-manipulator-secondary hover:text-manipulator-primary p-3 rounded-full transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a
                  href="#"
                  className="bg-manipulator-primary text-white hover:bg-manipulator-secondary hover:text-manipulator-primary p-3 rounded-full transition-colors"
                >
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-manipulator-primary">
              Заказать звонок
            </h3>
            <p className="text-manipulator-gray-dark mb-6">
              Оставьте свои контактные данные, и наш менеджер свяжется с вами в
              ближайшее время
            </p>

            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  className="border-manipulator-gray-light focus-visible:ring-manipulator-primary"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="border-manipulator-gray-light focus-visible:ring-manipulator-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Опишите вашу задачу"
                  className="border-manipulator-gray-light focus-visible:ring-manipulator-primary"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-manipulator-primary hover:bg-manipulator-primary/90 text-white">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={16} />
              </Button>
              <p className="text-xs text-manipulator-gray-dark text-center mt-4">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с политикой
                конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
