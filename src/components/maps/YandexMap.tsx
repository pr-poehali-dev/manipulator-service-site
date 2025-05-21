
import React, { useState } from "react";
import { useYandexMap } from "./useYandexMap";
import MapLoader from "./MapLoader";
import MapError from "./MapError";
import MapControls from "./MapControls";
import { YandexMapProps } from "./types";
import { DEFAULT_MOSCOW_LOCATION } from "./config";
import "./MapStyles.css";

/**
 * Компонент Яндекс.Карты с отображением местоположения и возможностью построения маршрута
 * 
 * @example
 * <YandexMap 
 *   coordinates={[55.751244, 37.618423]} 
 *   address="ул. Тверская, 1" 
 *   city="Москва" 
 * />
 */
const YandexMap: React.FC<YandexMapProps> = ({
  coordinates,
  address,
  city = "Клин",
  balloonTitle = "Наша компания",
  additionalInfo = "Тел: 8 (903) 207-40-92",
  mapOptions
}) => {
  const [routeBuilt, setRouteBuilt] = useState(false);
  
  // Используем наш кастомный хук для инициализации карты
  const { map, ymaps, isLoaded, userPosition, error } = useYandexMap({
    coordinates,
    address,
    city,
    options: mapOptions,
    additionalInfo,
    balloonTitle
  });

  // Показываем состояние загрузки
  if (!isLoaded) {
    return <MapLoader text="Загрузка карты..." />;
  }

  // Показываем ошибку, если она возникла
  if (error) {
    return (
      <MapError 
        message="Не удалось загрузить карту"
        details={error.message}
      />
    );
  }

  return (
    <div className="yandex-map-container relative">
      {/* Контейнер для карты */}
      <div 
        id="ymap-container" 
        className="w-full h-[400px] rounded-lg shadow-md"
        aria-label={`Карта с расположением: ${city}, ${address}`}
      />
      
      {/* Элементы управления картой */}
      {map && ymaps && (
        <MapControls
          map={map}
          ymaps={ymaps}
          coordinates={coordinates}
          userPosition={userPosition}
          defaultLocation={DEFAULT_MOSCOW_LOCATION}
          onRouteBuilt={setRouteBuilt}
        />
      )}
    </div>
  );
};

export default YandexMap;
