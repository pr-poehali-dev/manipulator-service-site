
import React from "react";

interface FooterCopyrightProps {
  year: number;
  companyName: string;
  documents: Array<{
    title: string;
    href: string;
  }>;
}

const FooterCopyright: React.FC<FooterCopyrightProps> = ({
  year,
  companyName,
  documents,
}) => {
  return (
    <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm">
        © {year} {companyName}. Все права защищены.
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        {documents.map((doc, index) => (
          <a
            key={index}
            href={doc.href}
            className="text-gray-400 text-sm hover:text-manipulator-secondary transition-colors"
          >
            {doc.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterCopyright;
