import { useState, useEffect, useCallback, useRef } from "react";
import { UseYandexMapParams, MapInstance, RoutePoint } from "./types";
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
  const [userPosition, setUserPosition] = useState<[number, number] | null>(
    null,
  );
  const [routePoints, setRoutePoints] = useState<RoutePoint[]>([]);
  const [customRouteMode, setCustomRouteMode] = useState<boolean>(false);

  // Рефы для отслеживания объектов карты
  const markersRef = useRef<any[]>([]);
  const routeRef = useRef<any | null>(null);

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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        () => {
          console.log(
            "Геолокация недоступна, будет использовано местоположение по умолчанию",
          );
        },
      );
    }

    return () => {
      if (mapInstance) {
        clearCustomRoute();
      }
    };
  }, []);

  // Функция для добавления метки на карту
  const addMarker = useCallback(
    (coords: [number, number], color: string, draggable: boolean = true) => {
      if (!mapInstance || !ymapsInstance) return null;

      const marker = new ymapsInstance.Placemark(
        coords,
        {
          hintContent: color === "green" ? "Точка А" : "Точка Б",
        },
        {
          draggable: draggable,
          preset: "islands#circleIcon",
          iconColor: color,
        },
      );

      marker.events.add("dragend", () => {
        if (routePoints.length === 2) {
          buildRoute();
        }
      });

      mapInstance.geoObjects.add(marker);
      markersRef.current.push(marker);

      return marker;
    },
    [mapInstance, ymapsInstance, routePoints],
  );

  // Функция для построения маршрута между точками
  const buildRoute = useCallback(() => {
    if (!mapInstance || !ymapsInstance || markersRef.current.length !== 2)
      return;

    if (routeRef.current) {
      mapInstance.geoObjects.remove(routeRef.current);
      routeRef.current = null;
    }

    const startPoint = markersRef.current[0].geometry.getCoordinates();
    const endPoint = markersRef.current[1].geometry.getCoordinates();

    const multiRoute = new ymapsInstance.multiRouter.MultiRoute(
      {
        referencePoints: [startPoint, endPoint],
        params: {
          routingMode: "auto",
          avoidTrafficJams: true,
        },
      },
      {
        routeActiveStrokeWidth: 6,
        routeActiveStrokeColor: "#1e3a8a",
        routeActivePedestrianSegmentStrokeStyle: "solid",
        boundsAutoApply: true,
      },
    );

    mapInstance.geoObjects.add(multiRoute);
    routeRef.current = multiRoute;
  }, [mapInstance, ymapsInstance]);

  // Включение режима пользовательского маршрута
  const enableCustomRouteMode = useCallback(() => {
    if (!mapInstance || !ymapsInstance) return;

    setCustomRouteMode(true);
    clearCustomRoute();

    const clickListener = mapInstance.events.group().add("click", (e: any) => {
      const coords = e.get("coords");

      if (markersRef.current.length === 0) {
        const markerA = addMarker(coords, "green");
        if (markerA) {
          setRoutePoints((prev) => [
            ...prev,
            {
              type: "A",
              coordinates: coords,
            },
          ]);
        }
      } else if (markersRef.current.length === 1) {
        const markerB = addMarker(coords, "red");
        if (markerB) {
          setRoutePoints((prev) => [
            ...prev,
            {
              type: "B",
              coordinates: coords,
            },
          ]);

          setTimeout(() => buildRoute(), 100);
        }

        mapInstance.events.remove(clickListener);
      }
    });

    return () => {
      if (mapInstance) {
        mapInstance.events.remove(clickListener);
      }
    };
  }, [mapInstance, ymapsInstance, addMarker, buildRoute]);

  // Очистка пользовательского маршрута
  const clearCustomRoute = useCallback(() => {
    if (!mapInstance) return;

    markersRef.current.forEach((marker) => {
      mapInstance.geoObjects.remove(marker);
    });
    markersRef.current = [];

    if (routeRef.current) {
      mapInstance.geoObjects.remove(routeRef.current);
      routeRef.current = null;
    }

    setRoutePoints([]);
  }, [mapInstance]);

  // Инициализация карты после загрузки API
  useEffect(() => {
    if (!isLoaded || !window.ymaps) return;

    window.ymaps.ready(() => {
      try {
        setYmapsInstance(window.ymaps);

        const map = new window.ymaps.Map("ymap-container", {
          center: [latitude, longitude],
          zoom: mapOptions.zoom,
          controls: mapOptions.showControls
            ? ["zoomControl", "fullscreenControl", "rulerControl"]
            : [],
        });

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
    userPosition,
    error,
    routePoints,
    enableCustomRouteMode,
    clearCustomRoute,
  };
}
