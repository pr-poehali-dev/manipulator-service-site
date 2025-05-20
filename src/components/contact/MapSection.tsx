
import React from "react";

interface MapSectionProps {
  coordinates: [number, number];
  address: string;
}

const MapSection: React.FC<MapSectionProps> = ({ coordinates, address }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-manipulator-primary">
        Мы на карте
      </h3>
      <div className="h-[300px] rounded-lg overflow-hidden">
        <iframe
          src={`https://yandex.ru/map-widget/v1/?um=constructor%3Aab61598e7b61d77f4d9adcb84770f7a7c8ca97cd8beaa304c3d7c52ce8088c50&amp;source=constructor&amp;scroll=false&amp;ll=${coordinates[1]}%2C${coordinates[0]}&amp;z=15`}
          width="100%"
          height="100%"
          frameBorder="0"
          title={`Адрес: ${address}`}
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
