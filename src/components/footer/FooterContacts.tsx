
import React from "react";
import Icon from "@/components/ui/icon";
import { PhoneData } from "./types";

interface FooterContactsProps {
  title: string;
  phones: PhoneData[];
  email: string;
  address: string;
  workingHours: string;
}

const FooterContacts: React.FC<FooterContactsProps> = ({
  title,
  phones,
  email,
  address,
  workingHours,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-manipulator-secondary">
        {title}
      </h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <Icon
            name="Phone"
            size={16}
            className="text-manipulator-secondary mr-2 mt-1"
          />
          <div className="flex flex-col space-y-2">
            {phones.map((phone, index) => (
              <div key={index}>
                <a
                  href={`tel:+8${phone.number}`}
                  className="text-gray-300 hover:text-manipulator-secondary transition-colors"
                >
                  {phone.formattedNumber}
                </a>
                <div className="flex space-x-3 mt-1">
                  <a
                    href={`https://wa.me/7${phone.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Icon name="MessageCircle" size={12} className="mr-1" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`https://t.me/+7${phone.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Icon name="Send" size={12} className="mr-1" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li className="flex items-center">
          <Icon
            name="Mail"
            size={16}
            className="text-manipulator-secondary mr-2"
          />
          <a
            href={`mailto:${email}`}
            className="text-gray-300 hover:text-manipulator-secondary transition-colors"
          >
            {email}
          </a>
        </li>
        <li className="flex items-start">
          <Icon
            name="MapPin"
            size={16}
            className="text-manipulator-secondary mr-2 mt-1"
          />
          <span className="text-gray-300">{address}</span>
        </li>
        <li className="flex items-center">
          <Icon
            name="Clock"
            size={16}
            className="text-manipulator-secondary mr-2"
          />
          <span className="text-gray-300">{workingHours}</span>
        </li>
      </ul>
    </div>
  );
};

export default FooterContacts;
