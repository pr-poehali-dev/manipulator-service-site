import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "@/hooks/use-toast";
import { sendMessageToTelegram, formatOrderMessage } from "@/utils/telegramApi";
import { ContactFormData, ContactFormErrors } from "./types";

/**
 * Хук для управления состоянием и логикой контактной формы
 */
export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Обработчик изменения полей формы
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Очистка ошибки при изменении поля
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /**
   * Валидация формы перед отправкой
   */
  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Поле обязательно для заполнения";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Поле обязательно для заполнения";
    } else {
      // Более простая проверка для номера телефона
      const phoneNumber = formData.phone.replace(/\D/g, "");
      if (phoneNumber.length < 10) {
        newErrors.phone = "Введите корректный номер телефона";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Отправка формы в Telegram
   */
  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    // Валидация формы
    if (!validateForm()) {
      toast({
        title: "Ошибка в форме",
        description: "Пожалуйста, проверьте правильность заполнения полей",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Логируем данные формы
      console.log("Отправка формы:", formData);

      // Форматируем сообщение для Telegram
      const formattedMessage = formatOrderMessage(
        formData.name,
        formData.phone,
        formData.message,
      );

      // Отправляем сообщение в Telegram
      console.log("Подготовленное сообщение:", formattedMessage);
      const success = await sendMessageToTelegram(formattedMessage);

      if (success) {
        toast({
          title: "Заявка отправлена",
          description: "Наш менеджер свяжется с вами в ближайшее время",
        });

        // Очищаем форму после успешной отправки
        setFormData({ name: "", phone: "", message: "" });
        return true;
      } else {
        throw new Error("Не удалось отправить заявку в Telegram");
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);

      toast({
        title: "Ошибка отправки",
        description:
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    submitForm,
  };
};
