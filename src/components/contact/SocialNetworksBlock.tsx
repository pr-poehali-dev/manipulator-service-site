
interface SocialNetworksBlockProps {
  qrCodeUrl: string;
  description: string;
}

const SocialNetworksBlock = ({ qrCodeUrl, description }: SocialNetworksBlockProps) => {
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-3">Мы в социальных сетях</h3>
      <div className="flex flex-col items-start">
        <p className="text-sm mb-2">{description}</p>
        <img
          src={qrCodeUrl}
          alt="QR-код ВКонтакте"
          className="h-40 bg-white p-1 rounded"
        />
      </div>
    </div>
  );
};

export default SocialNetworksBlock;
