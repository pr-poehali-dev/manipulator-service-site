
import React from "react";

interface FooterLogoProps {
  logoUrl: string;
  companyName: string;
  description: string;
  qrCodeUrl: string;
  qrCodeDescription?: string;
}

const FooterLogo: React.FC<FooterLogoProps> = ({
  logoUrl,
  companyName,
  description,
  qrCodeUrl,
  qrCodeDescription = "Мы ВКонтакте:",
}) => {
  return (
    <div className="md:col-span-2">
      <div className="flex items-center mb-4">
        <img
          src={logoUrl}
          alt={`${companyName} логотип`}
          className="h-10 mr-3 bg-white p-1 rounded"
        />
        <span className="font-oswald text-xl font-bold">{companyName}</span>
      </div>
      <p className="text-gray-300 mb-4 max-w-md">{description}</p>

      {/* QR-код */}
      <div className="mt-4">
        <p className="text-sm text-gray-300 mb-2">{qrCodeDescription}</p>
        <img
          src={qrCodeUrl}
          alt="QR-код для социальной сети"
          className="h-32 bg-white p-1 rounded"
        />
      </div>
    </div>
  );
};

export default FooterLogo;
