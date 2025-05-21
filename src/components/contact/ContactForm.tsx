
import React from "react";
import {
  FormInput,
  FormTextarea,
  SubmitButton,
  PrivacyPolicy,
  useContactForm,
  ContactFormProps,
} from "./form";

/**
 * Компонент контактной формы
 * Позволяет пользователям оставлять заявки на обратный звонок
 */
const ContactForm: React.FC<ContactFormProps> = ({
  title,
  description,
  onSubmitSuccess,
}) => {
  // Используем хук для управления состоянием формы
  const { formData, errors, isSubmitting, handleChange, submitForm } = useContactForm();

  // Обработчик отправки формы с поддержкой колбэка успеха
  const handleSubmit = async (e: React.FormEvent) => {
    const success = await submitForm(e);
    if (success && onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-manipulator-primary">
        {title}
      </h3>
      <p className="text-manipulator-gray-dark mb-6">{description}</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Поле ввода имени */}
        <FormInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ваше имя"
          error={errors.name}
        />

        {/* Поле ввода телефона */}
        <FormInput
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Ваш телефон"
          error={errors.phone}
        />

        {/* Поле ввода сообщения */}
        <FormTextarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Опишите вашу задачу (необязательно)"
          rows={4}
        />

        {/* Кнопка отправки формы */}
        <SubmitButton isSubmitting={isSubmitting} />

        {/* Согласие с политикой конфиденциальности */}
        <PrivacyPolicy />
      </form>
    </div>
  );
};

export default ContactForm;
