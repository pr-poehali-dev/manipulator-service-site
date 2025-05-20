
import React from "react";

interface MapSectionProps {
  coordinates: [number, number];
  address: string;
}

const MapSection: React.FC<MapSectionProps> = ({ coordinates, address }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-manipulator-primary">
        Мы на карте
      </h3>
      <div className="aspect-video rounded-lg overflow-hidden shadow-md">
        <iframe
          src={`https://yandex.ru/map-widget/v1/?um=constructor%3Aec7ca07f96eded3d7d370c4f1d57e45f42a4d8c4ee6df1d52198e32cb0e6b39a&amp;source=constructor&amp;scroll=false&amp;ll=${coordinates[1]}%2C${coordinates[0]}&amp;z=15`}
          width="100%"
          height="100%"
          title={`Карта: ${address}`}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
