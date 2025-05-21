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
  /** Разрешить пользовательские маршруты */
  allowCustomRoutes?: boolean;
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
  /** Разрешить пользовательские маршруты */
  allowCustomRoutes?: boolean;
}

export interface RoutePoint {
  type: "A" | "B";
  coordinates: [number, number];
}

export interface MapInstance {
  map: any;
  ymaps: any;
  isLoaded: boolean;
  userPosition: [number, number] | null;
  error: Error | null;
  routePoints: RoutePoint[];
  enableCustomRouteMode: () => void;
  clearCustomRoute: () => void;
}

export interface UserRoutePoint {
  id: string;
  coords: [number, number];
  placemark: any;
  type: "start" | "end";
}

// Для Typescript
declare global {
  interface Window {
    ymaps: any;
  }
}
