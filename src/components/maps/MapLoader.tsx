
import React from 'react';

interface MapLoaderProps {
  text?: string;
}

/**
 * Компонент для отображения состояния загрузки карты
 */
const MapLoader: React.FC<MapLoaderProps> = ({ 
  text = "Загрузка карты..." 
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-gray-50 rounded-lg border border-gray-200">
      <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin mb-4"></div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default MapLoader;
