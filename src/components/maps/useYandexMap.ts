import { useState, useEffect } from "react";
import { UseYandexMapParams, MapInstance } from "./types";
import {
  DEFAULT_MAP_OPTIONS,
  YANDEX_MAPS_API_CONFIG,
  MARKER_PRESETS,
} from "./config";

/**
 * Хук для работы с Яндекс.Картами
 * Инкапсулирует логику загрузки API и инициализации карты
 */
export function useYandexMap({
  coordinates,
  address,
  city,
  options = DEFAULT_MAP_OPTIONS,
  additionalInfo,
  balloonTitle = "Наша компания",
}: UseYandexMapParams): MapInstance {
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [ymapsInstance, setYmapsInstance] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const [latitude, longitude] = coordinates;
  const mapOptions = { ...DEFAULT_MAP_OPTIONS, ...options };

  // Загрузка скрипта Яндекс-Карт
  useEffect(() => {
    const loadYandexMapScript = () => {
      if (document.getElementById(YANDEX_MAPS_API_CONFIG.scriptId)) {
        if (window.ymaps) {
          setIsLoaded(true);
        }
        return;
      }

      try {
        const script = document.createElement("script");
        const params = new URLSearchParams(YANDEX_MAPS_API_CONFIG.params);

        script.src = `${YANDEX_MAPS_API_CONFIG.apiUrl}?${params.toString()}`;
        script.id = YANDEX_MAPS_API_CONFIG.scriptId;
        script.async = true;

        script.onload = () => setIsLoaded(true);
        script.onerror = (e) =>
          setError(new Error("Не удалось загрузить Яндекс-Карты"));

        document.body.appendChild(script);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Неизвестная ошибка при загрузке карт"),
        );
      }
    };

    loadYandexMapScript();

    // Очистка при размонтировании
    return () => {
      if (mapInstance) {
        // Очистка ресурсов карты, если необходимо
      }
    };
  }, []);

  // Инициализация карты после загрузки API
  useEffect(() => {
    if (!isLoaded || !window.ymaps) return;

    window.ymaps.ready(() => {
      try {
        // Сохраняем ссылку на ymaps для внешнего использования
        setYmapsInstance(window.ymaps);

        // Создаем экземпляр карты
        const map = new window.ymaps.Map("ymap-container", {
          center: [latitude, longitude],
          zoom: mapOptions.zoom,
          controls: mapOptions.showControls
            ? ["zoomControl", "fullscreenControl", "rulerControl"]
            : [],
        });

        // Добавляем поиск, если требуется
        if (mapOptions.enableSearch) {
          map.controls.add(
            new window.ymaps.control.SearchControl({
              options: {
                provider: "yandex#search",
                size: "small",
                float: "right",
              },
            }),
          );
        }

        // Создаем и добавляем метку
        const placemark = new window.ymaps.Placemark(
          [latitude, longitude],
          {
            hintContent: balloonTitle,
            balloonContentHeader: balloonTitle,
            balloonContentBody: `
              <div style="padding: 10px; max-width: 250px;">
                <strong>${city}</strong>
                <p>${address}</p>
                ${additionalInfo ? `<p>${additionalInfo}</p>` : ""}
              </div>
            `,
          },
          {
            preset: MARKER_PRESETS.default,
            iconColor: mapOptions.markerColor,
          },
        );

        map.geoObjects.add(placemark);
        setMapInstance(map);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Ошибка инициализации карты"),
        );
      }
    });
  }, [
    isLoaded,
    latitude,
    longitude,
    city,
    address,
    additionalInfo,
    balloonTitle,
    mapOptions,
  ]);

  return {
    map: mapInstance,
    ymaps: ymapsInstance,
    isLoaded,
    error,
  };
}
