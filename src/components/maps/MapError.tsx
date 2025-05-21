
import React from 'react';

interface MapErrorProps {
  error: Error | null;
  fallbackText?: string;
}

/**
 * Компонент для отображения ошибок при работе с картой
 */
const MapError: React.FC<MapErrorProps> = ({ 
  error, 
  fallbackText = "Не удалось загрузить карту. Пожалуйста, проверьте подключение к интернету или попробуйте позже." 
}) => {
  if (!error) return null;
  
  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-gray-100 rounded-lg border border-gray-200 p-6 text-center">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        className="w-12 h-12 text-red-500 mb-4"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
        />
      </svg>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Ошибка загрузки карты</h3>
      <p className="text-gray-600 mb-4">{error.message || fallbackText}</p>
      <button 
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Попробовать снова
      </button>
    </div>
  );
};

export default MapError;
