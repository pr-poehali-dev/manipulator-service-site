
import Icon from "@/components/ui/icon";

interface PhoneData {
  number: string;
  formattedNumber: string;
}

interface PhoneBlockProps {
  phones: PhoneData[];
  workingHours: string;
}

const PhoneBlock = ({ phones, workingHours }: PhoneBlockProps) => {
  return (
    <div className="space-y-3">
      {phones.map((phone, index) => (
        <div key={index}>
          <a
            href={`tel:+8${phone.number}`}
            className="block text-manipulator-primary hover:text-manipulator-secondary transition-colors"
          >
            {phone.formattedNumber}
          </a>
          <div className="flex mt-1 space-x-3">
            <a
              href={`https://wa.me/7${phone.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs text-green-600 hover:text-green-700 transition-colors"
            >
              <Icon name="MessageCircle" className="mr-1" size={14} />
              <span>WhatsApp</span>
            </a>
            <a
              href={`https://t.me/+7${phone.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Icon name="Send" className="mr-1" size={14} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      ))}
      <p className="text-sm text-manipulator-gray-dark mt-3">{workingHours}</p>
    </div>
  );
};

export default PhoneBlock;
