import React, { useState } from "react";
import { useYandexMap } from "./useYandexMap";
import MapLoader from "./MapLoader";
import MapError from "./MapError";
import RouteBuilder from "./RouteBuilder";
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
  mapOptions,
}) => {
  const [customRouteMode, setCustomRouteMode] = useState(false);

  // Используем наш кастомный хук для инициализации карты
  const {
    map,
    ymaps,
    isLoaded,
    error,
    routePoints,
    enableCustomRouteMode,
    clearCustomRoute,
  } = useYandexMap({
    coordinates,
    address,
    city,
    options: mapOptions,
    additionalInfo,
    balloonTitle,
  });

  // Показываем состояние загрузки
  if (!isLoaded) {
    return <MapLoader text="Загрузка карты..." />;
  }

  // Показываем ошибку, если она возникла
  if (error) {
    return (
      <MapError message="Не удалось загрузить карту" details={error.message} />
    );
  }

  // Обработчики для управления режимом построения маршрута
  const handleEnableCustomRoutes = () => {
    setCustomRouteMode(true);
    enableCustomRouteMode();
  };

  const handleDisableCustomRoutes = () => {
    setCustomRouteMode(false);
  };

  const handleClearRoute = () => {
    clearCustomRoute();
  };

  return (
    <div className="yandex-map-container relative">
      {/* Контейнер для карты */}
      <div
        id="ymap-container"
        className="w-full h-[400px] rounded-lg shadow-md"
        aria-label={`Карта с расположением: ${city}, ${address}`}
      />

      {/* Элементы управления пользовательскими маршрутами */}
      {map && ymaps && (
        <RouteBuilder
          onClearRoute={handleClearRoute}
          onDisableCustomRoutes={
            customRouteMode
              ? handleDisableCustomRoutes
              : handleEnableCustomRoutes
          }
          isActive={customRouteMode}
        />
      )}
    </div>
  );
};

export default YandexMap;
