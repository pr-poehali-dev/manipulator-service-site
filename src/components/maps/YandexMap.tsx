import React from "react";
import { useYandexMap } from "./useYandexMap";
import MapLoader from "./MapLoader";
import MapError from "./MapError";
import { YandexMapProps } from "./types";
import "./MapStyles.css";

/**
 * Компонент Яндекс.Карты с отображением местоположения
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
  // Используем наш кастомный хук для инициализации карты
  const { isLoaded, error } = useYandexMap({
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

  return (
    <div className="yandex-map-container relative">
      {/* Контейнер для карты */}
      <div
        id="ymap-container"
        className="w-full h-[400px] rounded-lg shadow-md"
        aria-label={`Карта с расположением: ${city}, ${address}`}
      />
    </div>
  );
};

export default YandexMap;
