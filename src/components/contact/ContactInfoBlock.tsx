import React, { ReactNode } from "react";
import Icon from "@/components/ui/icon";

interface ContactInfoBlockProps {
  icon: string;
  title: string;
  children: ReactNode;
}

/**
 * Блок с контактной информацией, состоящий из иконки, заголовка и содержимого
 */
const ContactInfoBlock = ({ icon, title, children }: ContactInfoBlockProps) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 rounded-full bg-manipulator-primary/10 flex items-center justify-center">
          <Icon name={icon} size={24} className="text-manipulator-primary" />
        </div>
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
