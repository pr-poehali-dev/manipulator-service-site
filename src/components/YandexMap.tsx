
import { useEffect, useRef } from "react";

interface YandexMapProps {
  address: string;
  coordinates: [number, number]; // [latitude, longitude]
}

const YandexMap = ({ address, coordinates }: YandexMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [latitude, longitude] = coordinates;

  useEffect(() => {
    // Функция для загрузки API Яндекс.Карт
    const loadYandexMapScript = () => {
      if (!document.getElementById("yandex-map-script")) {
        const script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/2.1/?apikey=ваш_API_ключ&lang=ru_RU";
        script.id = "yandex-map-script";
        script.async = true;
        script.onload = initMap;
        document.body.appendChild(script);
      } else if (window.ymaps) {
        initMap();
      }
    };

    // Инициализация карты
    const initMap = () => {
      if (mapRef.current && window.ymaps) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map(mapRef.current!, {
            center: [latitude, longitude],
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"]
          });

          // Создаем метку
          const placemark = new window.ymaps.Placemark(
            [latitude, longitude],
            {
              hintContent: "EVO - транс",
              balloonContent: `
                <div style="padding: 10px; max-width: 200px;">
                  <strong>EVO - транс</strong>
                  <p>${address}</p>
                  <p>Тел: 8 (925) 364-55-81</p>
                  <a href="https://yandex.ru/maps/?rtext=~${latitude},${longitude}" 
                     target="_blank" 
                     style="color: #2563eb; text-decoration: underline;">
                    Проложить маршрут
                  </a>
                </div>
              `
            },
            {
              preset: "islands#blueDeliveryCircleIcon",
              iconColor: "#1e3a8a"
            }
          );

          map.geoObjects.add(placemark);

          // Немного зума для мобильных
          if (window.innerWidth < 768) {
            map.setZoom(14);
          }

          // Добавляем кнопку построения маршрута
          const routeButton = new window.ymaps.control.Button({
            data: {
              content: "Как добраться",
              title: "Нажмите, чтобы построить маршрут"
            },
            options: {
              selectOnClick: false,
              maxWidth: 150
            }
          });

          routeButton.events.add("click", function () {
            window.open(`https://yandex.ru/maps/?rtext=~${latitude},${longitude}`, "_blank");
          });

          map.controls.add(routeButton, { float: "right" });
        });
      }
    };

    loadYandexMapScript();

    // Очистка
    return () => {
      const script = document.getElementById("yandex-map-script");
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [latitude, longitude, address]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-md"
      aria-label="Карта с местоположением компании"
    />
  );
};

export default YandexMap;

// Добавляем нужные типы для TypeScript
declare global {
  interface Window {
    ymaps: any;
  }
}
