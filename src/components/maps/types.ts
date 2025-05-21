/**
 * Типы для работы с Яндекс картами
 */

export interface MapCoordinates {
  latitude: number;
  longitude: number;
}

export interface YandexMapProps {
  /** Адрес объекта для отображения */
  address: string;
  /** Координаты объекта [широта, долгота] */
  coordinates: [number, number];
  /** Город (опционально) */
  city?: string;
  /** Заголовок балуна (опционально) */
  balloonTitle?: string;
  /** Дополнительная информация для балуна (опционально) */
  additionalInfo?: string;
  /** Опции карты */
  mapOptions?: YandexMapOptions;
}

export interface YandexMapOptions {
  /** Начальный уровень зума */
  zoom?: number;
  /** Показывать элементы управления */
  showControls?: boolean;
  /** Подключать поиск */
  enableSearch?: boolean;
  /** Цвет иконки маркера */
  markerColor?: string;
}

export interface UseYandexMapParams {
  /** Координаты карты */
  coordinates: [number, number];
  /** Адрес */
  address: string;
  /** Город */
  city: string;
  /** Опции карты */
  options?: YandexMapOptions;
  /** Дополнительная информация для балуна */
  additionalInfo?: string;
  /** Заголовок балуна */
  balloonTitle?: string;
}

export interface MapInstance {
  map: any;
  ymaps: any;
  isLoaded: boolean;
  error: Error | null;
}

// Для Typescript
declare global {
  interface Window {
    ymaps: any;
  }
}
