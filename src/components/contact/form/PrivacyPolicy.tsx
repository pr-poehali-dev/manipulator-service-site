
import React from 'react';

interface PrivacyPolicyProps {
  policyUrl?: string;
  className?: string;
}

/**
 * Компонент с текстом согласия на обработку персональных данных
 */
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  policyUrl = "#",
  className = "",
}) => {
  return (
    <p className={`text-xs text-manipulator-gray-dark text-center mt-4 ${className}`}>
      Нажимая кнопку "Отправить заявку", вы соглашаетесь с{` `}
      <a
        href={policyUrl}
        className="text-manipulator-primary hover:text-manipulator-secondary underline"
      >
        политикой конфиденциальности
      </a>
    </p>
  );
};

export default PrivacyPolicy;
