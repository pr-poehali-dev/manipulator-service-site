
import React from "react";

interface EmailBlockProps {
  email: string;
  description?: string;
}

const EmailBlock: React.FC<EmailBlockProps> = ({ email, description }) => {
  return (
    <div>
      <a
        href={`mailto:${email}`}
        className="block text-manipulator-primary hover:text-manipulator-secondary transition-colors"
      >
        {email}
      </a>
      {description && (
        <p className="text-sm text-manipulator-gray-dark mt-1">{description}</p>
      )}
    </div>
  );
};

export default EmailBlock;
