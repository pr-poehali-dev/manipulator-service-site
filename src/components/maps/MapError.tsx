
import React from 'react';

interface MapErrorProps {
  message: string;
  details?: string;
}

/**
 * Компонент для отображения ошибок при загрузке карты
 */
const MapError: React.FC<MapErrorProps> = ({ 
  message, 
  details 
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-gray-50 rounded-lg border border-red-200">
      <div className="text-red-500 mb-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">{message}</h3>
      {details && <p className="text-sm text-gray-500">{details}</p>}
      <button 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        onClick={() => window.location.reload()}
      >
        Перезагрузить страницу
      </button>
    </div>
  );
};

export default MapError;
