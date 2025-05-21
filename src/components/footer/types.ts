
/**
 * Типы данных для компонентов футера
 */

// Данные о телефоне
export interface PhoneData {
  number: string;
  formattedNumber: string;
}

// Ссылка на документ
export interface DocumentLink {
  title: string;
  href: string;
}

// Навигационная ссылка
export interface NavigationItem {
  title: string;
  href: string;
}

// Социальная сеть
export interface SocialNetwork {
  name: string;
  icon: string;
  url: string;
}

// Пропсы для основного компонента футера
export interface FooterProps {
  companyName?: string;
  logoUrl?: string;
  description?: string;
  qrCodeUrl?: string;
  year?: number;
}
