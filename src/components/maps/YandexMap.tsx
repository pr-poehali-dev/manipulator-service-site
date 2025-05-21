
import React, { useState } from 'react';
import { useYandexMap } from './useYandexMap';
import MapControls from './MapControls';
import MapError from './MapError';
import MapLoader from './MapLoader';
import MapStyles from './MapStyles';
import { YandexMapProps } from './types';
import { DEFAULT_MOSCOW_LOCATION } from './config';

/**
 * Компонент для отображения Яндекс.Карты
 * Разделен на логические части для улучшения поддерживаемости
 */
const YandexMap: React.FC<YandexMapProps> = ({
  address,
  coordinates,
  city = "Клин",
  balloonTitle = "Наша компания",
  additionalInfo = "Тел: 8 (903) 207-40-92",
  mapOptions
}) => {
  const [routeBuilt, setRouteBuilt] = useState(false);
  
  // Используем хук для работы с картой
  const { map, ymaps, isLoaded, userPosition, error } = useYandexMap({
    coordinates,
    address,
    city,
    options: mapOptions,
    additionalInfo,
    balloonTitle
  });

  // Обработка ошибок загрузки карты
  if (error) {
    return <MapError error={error} />;
  }

  // Отображаем лоадер во время загрузки API
  if (!isLoaded || !map) {
    return <MapLoader />;
  }

  // Рендерим карту
  return (
    <div className="relative">
      {/* Контейнер для карты */}
      <div 
        id="ymap-container"
        className="w-full h-[400px] rounded-lg shadow-md"
        aria-label="Карта с местоположением компании"
      />
      
      {/* Элементы управления картой */}
      <MapControls
        map={map}
        ymaps={ymaps}
        coordinates={coordinates}
        userPosition={userPosition}
        defaultLocation={DEFAULT_MOSCOW_LOCATION}
        onRouteBuilt={setRouteBuilt}
      />
      
      {/* Стили для карты */}
      <MapStyles />
    </div>
  );
};

export default YandexMap;
