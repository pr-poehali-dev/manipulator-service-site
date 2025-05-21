
import React from "react";
import YandexMap from "../YandexMap";

interface MapSectionProps {
  coordinates: [number, number];
  address: string;
  city?: string;
}

const MapSection: React.FC<MapSectionProps> = ({ 
  coordinates, 
  address, 
  city = "Клин" 
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white p-4">
      <h3 className="text-xl font-semibold mb-3 text-manipulator-primary">
        Мы на карте
      </h3>
      <p className="text-manipulator-gray-dark mb-4">
        {city}, {address}
      </p>
      <div className="h-[400px] rounded-lg overflow-hidden">
        <YandexMap 
          coordinates={coordinates} 
          address={address}
          city={city}
        />
      </div>
      <div className="mt-4 text-sm text-manipulator-gray-dark">
        <p className="italic">
          * Вы можете построить маршрут до нашего офиса прямо на карте, 
          нажав кнопку "Построить маршрут" и изменять масштаб карты с 
          помощью элементов управления.
        </p>
      </div>
    </div>
  );
};

export default MapSection;
