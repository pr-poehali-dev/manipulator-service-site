
import React, { useEffect, useRef } from 'react';

interface MapControlsProps {
  map: any;
  ymaps: any;
  coordinates: [number, number];
  userPosition: [number, number] | null;
  defaultLocation: [number, number];
  onRouteBuilt: (built: boolean) => void;
}

/**
 * Компонент с элементами управления картой (кнопки маршрута)
 */
const MapControls: React.FC<MapControlsProps> = ({
  map,
  ymaps,
  coordinates,
  userPosition,
  defaultLocation,
  onRouteBuilt
}) => {
  const [latitude, longitude] = coordinates;
  const routeBuiltRef = useRef<boolean>(false);
  
  useEffect(() => {
    if (!map || !ymaps) return;

    const container = document.createElement('div');
    container.className = 'map-custom-buttons';
    
    // Создаем кнопки
    const buildRouteBtn = document.createElement('button');
    buildRouteBtn.className = 'route-btn';
    buildRouteBtn.textContent = 'Построить маршрут';
    buildRouteBtn.id = 'build-route-btn';
    
    const resetRouteBtn = document.createElement('button');
    resetRouteBtn.className = 'route-btn';
    resetRouteBtn.textContent = 'Сбросить маршрут';
    resetRouteBtn.id = 'reset-route-btn';
    resetRouteBtn.style.display = 'none';
    
    // Добавляем кнопки в контейнер
    container.appendChild(buildRouteBtn);
    container.appendChild(resetRouteBtn);
    
    // Добавляем контейнер на карту
    const mapContainer = document.getElementById('ymap-container');
    if (mapContainer) {
      mapContainer.appendChild(container);
    }
    
    // Функция построения маршрута
    const buildRoute = () => {
      // Очищаем текущие маршруты
      map.geoObjects.each((geoObject: any) => {
        if (geoObject.properties && geoObject.properties.get && 
            geoObject.properties.get('routeObject')) {
          map.geoObjects.remove(geoObject);
        }
      });
      
      // Определяем начальную точку маршрута
      const startPoint = userPosition || defaultLocation;
      
      // Создаем мультимаршрут
      const multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [
            startPoint,
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
      
      // Помечаем как маршрут для возможности удаления
      multiRoute.properties.set("routeObject", true);
      
      // Добавляем маршрут на карту
      map.geoObjects.add(multiRoute);
      
      // Обновляем состояние UI
      buildRouteBtn.style.display = 'none';
      resetRouteBtn.style.display = 'block';
      onRouteBuilt(true);
      routeBuiltRef.current = true;
    };
    
    // Функция сброса маршрута
    const resetRoute = () => {
      map.geoObjects.each((geoObject: any) => {
        if (geoObject.properties && geoObject.properties.get && 
            geoObject.properties.get('routeObject')) {
          map.geoObjects.remove(geoObject);
        }
      });
      
      // Возвращаем карту к исходной точке
      map.setCenter([latitude, longitude], 15);
      
      // Обновляем состояние UI
      buildRouteBtn.style.display = 'block';
      resetRouteBtn.style.display = 'none';
      onRouteBuilt(false);
      routeBuiltRef.current = false;
    };
    
    // Добавляем обработчики событий
    buildRouteBtn.addEventListener('click', buildRoute);
    resetRouteBtn.addEventListener('click', resetRoute);
    
    // Очистка при размонтировании
    return () => {
      buildRouteBtn.removeEventListener('click', buildRoute);
      resetRouteBtn.removeEventListener('click', resetRoute);
      
      if (mapContainer && mapContainer.contains(container)) {
        mapContainer.removeChild(container);
      }
    };
  }, [map, ymaps, coordinates, userPosition, defaultLocation, onRouteBuilt]);
  
  // Этот компонент не рендерит видимых элементов,
  // т.к. элементы управления добавляются напрямую в DOM карты
  return null;
};

export default MapControls;
