
import React from 'react';
import { Input } from "@/components/ui/input";
import { FormFieldProps } from './types';

/**
 * Компонент для текстового поля ввода с возможной валидацией
 */
const FormInput: React.FC<FormFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  className = "",
}) => {
  return (
    <div>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border-manipulator-gray-light focus-visible:ring-manipulator-primary ${
          error ? "border-red-500" : ""
        } ${className}`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;
