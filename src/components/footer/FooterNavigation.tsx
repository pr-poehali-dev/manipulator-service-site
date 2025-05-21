
import React from "react";
import { NavigationItem } from "./types";

interface FooterNavigationProps {
  title: string;
  items: NavigationItem[];
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-manipulator-secondary">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="text-gray-300 hover:text-manipulator-secondary transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavigation;
