import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { toast } from "@/hooks/use-toast";
import { sendMessageToTelegram, formatOrderMessage } from "@/utils/telegramApi";

interface ContactFormProps {
  title: string;
  description: string;
}

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const ContactForm = ({ title, description }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Поле обязательно для заполнения";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Поле обязательно для заполнения";
    } else if (
      !/^(\+7|7|8)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
        formData.phone,
      )
    ) {
      newErrors.phone = "Введите корректный номер телефона";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-manipulator-primary">
        {title}
      </h3>
      <p className="text-manipulator-gray-dark mb-6">{description}</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            className={`border-manipulator-gray-light focus-visible:ring-manipulator-primary ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ваш телефон"
            className={`border-manipulator-gray-light focus-visible:ring-manipulator-primary ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Опишите вашу задачу (необязательно)"
            className="border-manipulator-gray-light focus-visible:ring-manipulator-primary"
            rows={4}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-manipulator-primary hover:bg-manipulator-primary/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
              Отправка...
            </>
          ) : (
            <>
              Отправить заявку
              <Icon name="Send" className="ml-2" size={16} />
            </>
          )}
        </Button>

        <p className="text-xs text-manipulator-gray-dark text-center mt-4">
          Нажимая кнопку "Отправить заявку", вы соглашаетесь с{` `}
          <a
            href="#"
            className="text-manipulator-primary hover:text-manipulator-secondary underline"
          >
            политикой конфиденциальности
          </a>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
