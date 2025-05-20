
import React, { ReactNode } from "react";
import Icon from "@/components/ui/icon";
import { LucideProps } from "lucide-react";

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
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-manipulator-primary/10 flex items-center justify-center mr-4">
        <Icon
          name={icon}
          size={24}
          className="text-manipulator-primary"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-manipulator-primary mb-2">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default ContactInfoBlock;
