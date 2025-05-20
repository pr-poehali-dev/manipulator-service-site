
import React from "react";

interface SocialNetworksBlockProps {
  qrCodeUrl: string;
  description: string;
}

const SocialNetworksBlock: React.FC<SocialNetworksBlockProps> = ({
  qrCodeUrl,
  description,
}) => {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <p className="text-manipulator-gray-dark mb-4">{description}</p>
      <img
        src={qrCodeUrl}
        alt="QR-код для соцсетей"
        className="h-40 mx-auto"
      />
    </div>
  );
};

export default SocialNetworksBlock;
