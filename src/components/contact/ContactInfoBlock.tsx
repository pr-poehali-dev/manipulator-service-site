
import React, { ReactNode } from "react";
import Icon from "@/components/ui/icon";

interface ContactInfoBlockProps {
  icon: string;
  title: string;
  children: ReactNode;
}

const ContactInfoBlock: React.FC<ContactInfoBlockProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 h-12 w-12 bg-manipulator-primary/10 rounded-full flex items-center justify-center">
        <Icon
          name={icon}
          size={24}
          className="text-manipulator-primary"
        />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold mb-2 text-manipulator-primary">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default ContactInfoBlock;
