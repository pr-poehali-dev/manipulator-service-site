
import React from "react";
import { FooterProps } from "./types";
import FooterLogo from "./FooterLogo";
import FooterNavigation from "./FooterNavigation";
import FooterContacts from "./FooterContacts";
import FooterCopyright from "./FooterCopyright";

/**
 * Основной компонент футера сайта
 */
const Footer: React.FC<FooterProps> = ({
  companyName = "EVO - транс",
  logoUrl = "https://cdn.poehali.dev/files/29880550-5e98-4f68-b09e-9f8cf14b1bf1.jpeg",
  description = "Предоставляем профессиональные услуги манипулятора для любых задач: от перевозки строительных материалов до монтажа сложных конструкций. Предоставляем услуги по городу Клин и Клинскому району, выполняем работу любой сложности.",
  qrCodeUrl = "https://cdn.poehali.dev/files/fffef046-0e63-407a-a327-6d23c4c5bbb8.jpeg",
  qrCodeDescription = "Мы ВКонтакте:",
  year = new Date().getFullYear(),
  phones = [
    { number: "9253645581", formattedNumber: "8 (925) 364-55-81" },
    { number: "9032074092", formattedNumber: "8 (903) 207-40-92" },
    { number: "9299891121", formattedNumber: "8 (929) 989-11-21" },
  ],
  navigationItems = [
    { title: "Главная", href: "#hero" },
    { title: "Услуги", href: "#services" },
    { title: "Преимущества", href: "#benefits" },
    { title: "Галерея работ", href: "#gallery" },
    { title: "Контакты", href: "#contacts" },
  ],
  email = "gruzoperevozki.klin@yandex.ru",
  address = "г. Клин, ул. Новоямская, 1А",
  workingHours = "Пн-Вс: 8:00-22:00",
  documents = [
    { title: "Политика конфиденциальности", href: "#" },
    { title: "Пользовательское соглашение", href: "#" },
  ],
}) => {
  return (
    <footer className="bg-manipulator-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и информация о компании */}
          <FooterLogo
            logoUrl={logoUrl}
            companyName={companyName}
            description={description}
            qrCodeUrl={qrCodeUrl}
            qrCodeDescription={qrCodeDescription}
          />

          {/* Разделы сайта */}
          <FooterNavigation
            title="Разделы сайта"
            items={navigationItems}
          />

          {/* Контактная информация */}
          <FooterContacts
            title="Контакты"
            phones={phones}
            email={email}
            address={address}
            workingHours={workingHours}
          />
        </div>

        {/* Копирайт и ссылки на документы */}
        <FooterCopyright
          year={year}
          companyName={companyName}
          documents={documents}
        />
      </div>
    </footer>
  );
};

export default Footer;
