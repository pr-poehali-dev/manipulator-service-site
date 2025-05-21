
import React from 'react';

/**
 * Компонент со стилями для элементов управления картой
 */
const MapStyles: React.FC = () => {
  return (
    <style jsx="true">{`
      .map-custom-buttons {
        position: absolute;
        z-index: 1000;
        top: 10px;
        left: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      
      .route-btn {
        padding: 8px 12px;
        background-color: #1e3a8a;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        transition: background-color 0.2s;
      }
      
      .route-btn:hover {
        background-color: #2563eb;
      }
      
      .route-btn:focus {
        outline: 2px solid #93c5fd;
        outline-offset: 2px;
      }
      
      .route-btn:active {
        transform: translateY(1px);
      }
      
      #ymap-container {
        width: 100%;
        height: 400px;
        border-radius: 0.5rem;
        overflow: hidden;
        position: relative;
      }
    `}</style>
  );
};

export default MapStyles;
