
import { ChangeEvent } from 'react';

/**
 * Данные контактной формы
 */
export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

/**
 * Ошибки валидации контактной формы
 */
export type ContactFormErrors = Partial<ContactFormData>;

/**
 * Пропсы для полей ввода формы
 */
export interface FormFieldProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  className?: string;
  type?: string;
}

/**
 * Пропсы для компонента контактной формы
 */
export interface ContactFormProps {
  title: string;
  description: string;
  onSubmitSuccess?: () => void;
}
