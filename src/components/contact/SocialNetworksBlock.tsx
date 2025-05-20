
import React from "react";

interface SocialNetworksBlockProps {
  qrCodeUrl: string;
  description?: string;
}

const SocialNetworksBlock: React.FC<SocialNetworksBlockProps> = ({
  qrCodeUrl,
  description,
}) => {
  return (
    <div className="mt-8">
      {description && (
        <p className="text-sm text-manipulator-gray-dark mb-2">{description}</p>
      )}
      <img
        src={qrCodeUrl}
        alt="QR-код"
        className="h-32 bg-white p-1 rounded-md shadow-sm"
      />
    </div>
  );
};

export default SocialNetworksBlock;
