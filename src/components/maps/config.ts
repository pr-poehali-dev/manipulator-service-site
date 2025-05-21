
/**
 * Конфигурация для работы с Яндекс.Картами
 */

// API ключ для Яндекс.Карт (необходимо заменить на реальный ключ)
export const YANDEX_MAPS_API_KEY = 'YOUR_YANDEX_MAPS_API_KEY';

// Настройки загрузки API
export const YANDEX_MAPS_API_CONFIG = {
  apiUrl: `https://api-maps.yandex.ru/2.1/`,
  params: {
    apikey: YANDEX_MAPS_API_KEY,
    lang: 'ru_RU'
  },
  scriptId: 'yandex-map-script'
};

// Геолокация Москвы для использования по умолчанию
export const DEFAULT_MOSCOW_LOCATION: [number, number] = [55.755864, 37.617698];

// Стили для маркера
export const MARKER_PRESETS = {
  default: "islands#blueDeliveryCircleIcon",
  delivery: "islands#blueDeliveryCircleIcon",
  gas: "islands#blueGasStationCircleIcon",
  shop: "islands#blueShoppingCircleIcon"
};

// Дефолтные настройки карты
export const DEFAULT_MAP_OPTIONS = {
  zoom: 15,
  showControls: true,
  enableSearch: true,
  markerColor: "#1e3a8a"
};

// ID элементов, используемых при интеграции
export const MAP_DOM_IDS = {
  scriptId: 'yandex-map-script',
  mapContainerId: 'ymap-container',
  routeButtonId: 'ymap-route-button',
  resetButtonId: 'ymap-reset-button'
};
