
import YandexMap from "@/components/YandexMap";

interface MapSectionProps {
  coordinates: [number, number];
  address: string;
}

const MapSection = ({ coordinates, address }: MapSectionProps) => {
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-3">Мы на карте</h3>
      <div className="relative mt-4 h-[400px] rounded-lg overflow-hidden">
        <YandexMap address={address} coordinates={coordinates} />
      </div>
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <a
          href={`https://yandex.ru/maps/?text=${coordinates[0]},${coordinates[1]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 bg-manipulator-primary/90 hover:bg-manipulator-primary text-white rounded-md"
        >
          Открыть в Яндекс Картах
        </a>
        <a
          href={`https://yandex.ru/maps/?rtext=~${coordinates[0]},${coordinates[1]}&rtt=auto`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 bg-manipulator-secondary hover:bg-yellow-500 text-black rounded-md"
        >
          Построить автомобильный маршрут
        </a>
      </div>
    </div>
  );
};

export default MapSection;
