
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SubmitButtonProps {
  isSubmitting: boolean;
  text?: string;
  loadingText?: string;
  className?: string;
}

/**
 * Кнопка отправки формы с состоянием загрузки
 */
const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  text = "Отправить заявку",
  loadingText = "Отправка...",
  className = "",
}) => {
  return (
    <Button
      type="submit"
      className={`w-full bg-manipulator-primary hover:bg-manipulator-primary/90 text-white ${className}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
          {loadingText}
        </>
      ) : (
        <>
          {text}
          <Icon name="Send" className="ml-2" size={16} />
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
