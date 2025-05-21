
import { useEffect, useRef, useState } from "react";

interface YandexMapProps {
  address: string;
  coordinates: [number, number]; // [latitude, longitude]
  city?: string;
}

const YandexMap = ({ address, coordinates, city = "Клин" }: YandexMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [latitude, longitude] = coordinates;
  const [mapLoaded, setMapLoaded] = useState(false);
  const [routeBuilt, setRouteBuilt] = useState(false);
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    // Функция для загрузки API Яндекс.Карт
    const loadYandexMapScript = () => {
      if (!document.getElementById("yandex-map-script")) {
        const script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/2.1/?apikey=ваш_API_ключ&lang=ru_RU";
        script.id = "yandex-map-script";
        script.async = true;
        script.onload = () => setMapLoaded(true);
        document.body.appendChild(script);
      } else if (window.ymaps) {
        setMapLoaded(true);
      }
    };

    loadYandexMapScript();

    // Получаем геолокацию пользователя, если она доступна
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.log("Ошибка получения геолокации:", error);
        }
      );
    }

    // Очистка
    return () => {
      const script = document.getElementById("yandex-map-script");
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Инициализация карты после загрузки API
  useEffect(() => {
    if (mapLoaded && mapRef.current && window.ymaps) {
      window.ymaps.ready(() => {
        // Создаем карту
        const map = new window.ymaps.Map(mapRef.current!, {
          center: [latitude, longitude],
          zoom: 15,
          controls: ["zoomControl", "fullscreenControl", "rulerControl"]
        });

        // Добавляем элементы управления
        map.controls.add(new window.ymaps.control.SearchControl({
          options: {
            provider: 'yandex#search',
            size: 'small',
            float: 'right'
          }
        }));

        // Создаем метку для нашей компании
        const companyPlacemark = new window.ymaps.Placemark(
          [latitude, longitude],
          {
            hintContent: "Наша компания",
            balloonContentHeader: "Наша компания",
            balloonContentBody: `
              <div style="padding: 10px; max-width: 250px;">
                <strong>${city}</strong>
                <p>${address}</p>
                <p>Тел: 8 (903) 207-40-92</p>
              </div>
            `
          },
          {
            preset: "islands#blueDeliveryCircleIcon",
            iconColor: "#1e3a8a"
          }
        );

        map.geoObjects.add(companyPlacemark);

        // Функция для построения маршрута
        const buildRoute = (from: [number, number]) => {
          // Очищаем предыдущие маршруты
          map.geoObjects.each((geoObject: any) => {
            if (geoObject.properties.get('routeObject')) {
              map.geoObjects.remove(geoObject);
            }
          });

          // Создаем мультимаршрут
          const multiRoute = new window.ymaps.multiRouter.MultiRoute(
            {
              referencePoints: [
                from,
                [latitude, longitude]
              ],
              params: {
                routingMode: "auto",
                avoidTrafficJams: true
              }
            },
            {
              routeActiveStrokeWidth: 6,
              routeActiveStrokeColor: "#1e3a8a",
              routeActivePedestrianSegmentStrokeStyle: "solid",
              boundsAutoApply: true
            }
          );

          // Устанавливаем свойство для идентификации маршрута
          multiRoute.properties.set("routeObject", true);
          
          // Добавляем маршрут на карту
          map.geoObjects.add(multiRoute);
          setRouteBuilt(true);
        };

        // Создаем кнопку для построения маршрута
        const routeButton = document.createElement('div');
        routeButton.className = 'build-route-button';
        routeButton.innerHTML = '<button class="route-btn">Построить маршрут</button>';
        routeButton.onclick = () => {
          if (userPosition) {
            buildRoute(userPosition);
          } else {
            // Если геолокация недоступна, используем геокодер для получения координат "Москва"
            window.ymaps.geocode("Москва").then((res: any) => {
              const moscowCoords = res.geoObjects.get(0).geometry.getCoordinates();
              buildRoute(moscowCoords);
            });
          }
        };

        const resetButton = document.createElement('div');
        resetButton.className = 'reset-route-button';
        resetButton.innerHTML = '<button class="route-btn">Сбросить маршрут</button>';
        resetButton.style.display = 'none';
        resetButton.onclick = () => {
          map.geoObjects.each((geoObject: any) => {
            if (geoObject.properties.get('routeObject')) {
              map.geoObjects.remove(geoObject);
            }
          });
          setRouteBuilt(false);
          resetButton.style.display = 'none';
          routeButton.style.display = 'block';
          map.setCenter([latitude, longitude], 15);
        };

        // Добавляем кастомные кнопки на карту
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'map-custom-buttons';
        buttonsContainer.appendChild(routeButton);
        buttonsContainer.appendChild(resetButton);
        
        mapRef.current!.appendChild(buttonsContainer);

        // Обновляем отображение кнопок при построении маршрута
        const updateButtons = () => {
          if (routeBuilt) {
            resetButton.style.display = 'block';
            routeButton.style.display = 'none';
          } else {
            resetButton.style.display = 'none';
            routeButton.style.display = 'block';
          }
        };

        // Отслеживаем изменение routeBuilt
        useEffect(() => {
          updateButtons();
        }, [routeBuilt]);
      });
    }
  }, [mapLoaded, latitude, longitude, address, city, userPosition, routeBuilt]);

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="w-full h-[400px] rounded-lg shadow-md"
        aria-label="Карта с местоположением компании"
      />
      
      {/* CSS для кастомных кнопок на карте */}
      <style jsx>{`
        .map-custom-buttons {
          position: absolute;
          z-index: 1000;
          top: 10px;
          left: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .route-btn {
          padding: 8px 12px;
          background-color: #1e3a8a;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .route-btn:hover {
          background-color: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default YandexMap;

// Добавляем нужные типы для TypeScript
declare global {
  interface Window {
    ymaps: any;
  }
}
