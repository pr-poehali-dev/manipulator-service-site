import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-manipulator-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и краткая информация */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.poehali.dev/files/29880550-5e98-4f68-b09e-9f8cf14b1bf1.jpeg"
                alt="EVO - транс логотип"
                className="h-10 mr-3 bg-white p-1 rounded"
              />
              <span className="font-oswald text-xl font-bold">EVO - транс</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Предоставляем профессиональные услуги манипулятора для любых
              задач: от перевозки строительных материалов до монтажа сложных
              конструкций. Предоставляем услуги по городу Клин и Клинскому
              району, выполняем работу любой сложности.
            </p>

            {/* QR-код ВКонтакте */}
            <div className="mt-4">
              <p className="text-sm text-gray-300 mb-2">Мы ВКонтакте:</p>
              <img
                src="https://cdn.poehali.dev/files/fffef046-0e63-407a-a327-6d23c4c5bbb8.jpeg"
                alt="QR-код ВКонтакте"
                className="h-32 bg-white p-1 rounded"
              />
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-manipulator-secondary">
              Разделы сайта
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                >
                  Преимущества
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                >
                  Галерея работ
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Контактная информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-manipulator-secondary">
              Контакты
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon
                  name="Phone"
                  size={16}
                  className="text-manipulator-secondary mr-2"
                />
                <div className="flex flex-col">
                  <a
                    href="tel:+89253645581"
                    className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                  >
                    8 (925) 364-55-81
                  </a>
                  <a
                    href="tel:+89032074092"
                    className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                  >
                    8 (903) 207-40-92
                  </a>
                  <a
                    href="tel:+89299891121"
                    className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                  >
                    8 (929) 989-11-21
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Mail"
                  size={16}
                  className="text-manipulator-secondary mr-2"
                />
                <a
                  href="mailto:gruzoperevozki.klin@yandex.ru"
                  className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                >
                  gruzoperevozki.klin@yandex.ru
                </a>
              </li>
              {/* Мессенджеры */}
              <li className="flex items-start">
                <Icon
                  name="MessageSquare"
                  size={16}
                  className="text-manipulator-secondary mr-2 mt-1"
                />
                <div className="flex flex-col">
                  <div className="flex space-x-3">
                    <a
                      href="https://wa.me/79253645581"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <Icon name="MessageCircle" size={14} className="mr-1" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="https://t.me/+79253645581"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <Icon name="Send" size={14} className="mr-1" />
                      <span>Telegram</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-manipulator-secondary mr-2 mt-1"
                />
                <span className="text-gray-300">
                  г. Клин, ул. Новоямская, 1А
                </span>
              </li>
              <li className="flex items-center">
                <Icon
                  name="Clock"
                  size={16}
                  className="text-manipulator-secondary mr-2"
                />
                <span className="text-gray-300">Пн-Вс: 8:00-22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} EVO - транс. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-manipulator-secondary transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-manipulator-secondary transition-colors"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
