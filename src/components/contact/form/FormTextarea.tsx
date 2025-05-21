
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { FormFieldProps } from './types';

/**
 * Компонент для многострочного поля ввода с возможной валидацией
 */
const FormTextarea: React.FC<FormFieldProps & { rows?: number }> = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  className = "",
  rows = 4
}) => {
  return (
    <div>
      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border-manipulator-gray-light focus-visible:ring-manipulator-primary ${
          error ? "border-red-500" : ""
        } ${className}`}
        rows={rows}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FormTextarea;
