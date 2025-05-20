
/**
 * Типы данных для компонентов футера
 */

// Тип для элемента навигации
export interface NavigationItem {
  title: string;
  href: string;
}

// Тип для данных телефона
export interface PhoneData {
  number: string;
  formattedNumber: string;
}

// Тип для документа (ссылки в копирайте)
export interface DocumentLink {
  title: string;
  href: string;
}
