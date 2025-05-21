import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface RouteBuilderProps {
  onClearRoute: () => void;
  onDisableCustomRoutes: () => void;
  isActive: boolean;
}

/**
 * Компонент для управления созданием маршрутов на карте
 */
const RouteBuilder: React.FC<RouteBuilderProps> = ({
  onClearRoute,
  onDisableCustomRoutes,
  isActive,
}) => {
  return (
    <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded-md shadow-md">
      <div className="flex flex-col gap-2">
        <div className="text-sm font-medium mb-1">
          {isActive ? "Режим создания маршрута" : "Построение маршрута"}
        </div>

        {isActive ? (
          <>
            <div className="text-xs text-gray-500 mb-2">
              Кликните на карту, чтобы установить точки А и Б
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onClearRoute}
                className="w-full"
              >
                <Icon name="Trash2" size={14} className="mr-1" />
                Очистить
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={onDisableCustomRoutes}
                className="w-full bg-manipulator-primary"
              >
                <Icon name="X" size={14} className="mr-1" />
                Завершить
              </Button>
            </div>
            <div className="flex mt-2 text-xs gap-2">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                <span>Точка А</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                <span>Точка Б</span>
              </div>
            </div>
          </>
        ) : (
          <Button
            variant="default"
            size="sm"
            onClick={onDisableCustomRoutes}
            className="w-full bg-manipulator-primary"
          >
            <Icon name="MapPin" size={14} className="mr-1" />
            Создать маршрут
          </Button>
        )}
      </div>
    </div>
  );
};

export default RouteBuilder;
