
import ContactInfoBlock from "@/components/contact/ContactInfoBlock";
import PhoneBlock from "@/components/contact/PhoneBlock";
import EmailBlock from "@/components/contact/EmailBlock";
import AddressBlock from "@/components/contact/AddressBlock";
import SocialNetworksBlock from "@/components/contact/SocialNetworksBlock";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";

const ContactSection = () => {
  // Данные для телефонных номеров
  const phones = [
    { number: "9253645581", formattedNumber: "8 (925) 364-55-81" },
    { number: "9032074092", formattedNumber: "8 (903) 207-40-92" },
    { number: "9299891121", formattedNumber: "8 (929) 989-11-21" },
  ];

  // Координаты местоположения (примерные координаты Клина)
  const coordinates: [number, number] = [56.3314, 36.7285];
  const address = "г. Клин, ул. Новоямская, 1А";

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
              и подберут оптимальный манипулятор для ваших задач. Предоставляем услуги по городу Клин и Клинскому району, выполняем работу любой сложности.
            </p>

            <div className="space-y-6">
              {/* Блок с телефонами */}
              <ContactInfoBlock icon="Phone" title="Телефон">
                <PhoneBlock 
                  phones={phones} 
                  workingHours="Ежедневно с 8:00 до 22:00" 
                />
              </ContactInfoBlock>

              {/* Блок с email */}
              <ContactInfoBlock icon="Mail" title="Email">
                <EmailBlock 
                  email="gruzoperevozki.klin@yandex.ru" 
                  description="Отвечаем в течение 1 часа" 
                />
              </ContactInfoBlock>

              {/* Блок с адресом */}
              <ContactInfoBlock icon="MapPin" title="Адрес">
                <AddressBlock 
                  address={address} 
                  workingHours="Пн-Вс: 8:00-22:00" 
                />
              </ContactInfoBlock>
            </div>

            {/* Социальные сети */}
            <SocialNetworksBlock 
              qrCodeUrl="https://cdn.poehali.dev/files/fffef046-0e63-407a-a327-6d23c4c5bbb8.jpeg" 
              description="Сканируйте QR-код, чтобы подписаться на нашу группу ВКонтакте:" 
            />
            
            {/* Яндекс Карта */}
            <MapSection coordinates={coordinates} address={address} />
          </div>

          {/* Форма обратной связи */}
          <ContactForm 
            title="Заказать звонок" 
            description="Оставьте свои контактные данные, и наш менеджер свяжется с вами в ближайшее время" 
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
