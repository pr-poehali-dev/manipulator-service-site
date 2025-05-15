
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { toast } from "@/hooks/use-toast";

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

  // Обработчик изменения полей формы
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при изменении поля
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Валидация формы
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Поле обязательно для заполнения";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Поле обязательно для заполнения";
    } else if (!/^(\+7|7|8)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(formData.phone)) {
      newErrors.phone = "Введите корректный номер телефона";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Отправка данных в Telegram
  const sendToTelegram = async () => {
    // Ваш токен бота и ID чата
    const botToken = "YOUR_BOT_TOKEN"; // Замените на токен вашего бота
    const chatId = "YOUR_CHAT_ID"; // Замените на ID вашего чата или группы
    
    const text = `
🔔 Новая заявка на обратный звонок!

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
${formData.message ? `💬 Сообщение: ${formData.message}` : ""}

📅 Дата: ${new Date().toLocaleString()}
`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML",
        }),
      });
      
      if (!response.ok) {
        throw new Error("Ошибка отправки сообщения");
      }
      
      return true;
    } catch (error) {
      console.error("Ошибка отправки в Telegram:", error);
      return false;
    }
  };

  // Обработчик отправки формы
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
      // Имитация задержки сети
      // В реальном приложении эта строка не нужна
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Отправка данных в Telegram
      const success = await sendToTelegram();
      
      if (success) {
        toast({
          title: "Заявка отправлена",
          description: "Наш менеджер свяжется с вами в ближайшее время",
        });
        
        // Сбрасываем форму
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error("Не удалось отправить заявку");
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.",
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
          Нажимая кнопку "Отправить заявку", вы соглашаетесь с{" "}
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
</script>
</current-code>

<pp-write filepath="src/utils/telegramApi.ts">
/**
 * Утилита для отправки сообщений в Telegram через Bot API
 */

// Константы для работы с Telegram API
const BOT_TOKEN = "YOUR_BOT_TOKEN"; // Замените на токен вашего бота 
const CHAT_ID = "YOUR_CHAT_ID"; // Замените на ID вашего чата или группы

/**
 * Отправляет сообщение в Telegram бота
 * @param message - Текст сообщения для отправки
 * @returns Promise<boolean> - Успешность операции
 */
export const sendMessageToTelegram = async (message: string): Promise<boolean> => {
  // URL для API бота Telegram
  const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
  try {
    // Делаем запрос к API Telegram для отправки сообщения
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML", // Поддержка HTML форматирования
      }),
    });
    
    // Проверяем успешность запроса
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API error:", errorData);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return false;
  }
};

/**
 * Форматирует данные заявки для отправки в Telegram
 * @param formData - Данные формы заявки
 * @returns Отформатированный текст сообщения
 */
export const formatOrderMessage = (
  name: string, 
  phone: string, 
  message?: string
): string => {
  return `
🔔 <b>Новая заявка на обратный звонок!</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
${message ? `💬 <b>Сообщение:</b> ${message}` : ""}

📅 <b>Дата:</b> ${new Date().toLocaleString("ru-RU")}
🌐 <b>Источник:</b> Сайт EVO-транс
`;
};
</current-code>

<pp-write filepath="src/components/contact/ContactForm.tsx" partial>
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

  // Обработчик изменения полей формы
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при изменении поля
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Валидация формы
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Поле обязательно для заполнения";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Поле обязательно для заполнения";
    } else if (!/^(\+7|7|8)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(formData.phone)) {
      newErrors.phone = "Введите корректный номер телефона";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Обработчик отправки формы
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
      // Форматируем сообщение для Telegram
      const formattedMessage = formatOrderMessage(
        formData.name,
        formData.phone,
        formData.message
      );
      
      // Отправляем сообщение в Telegram
      const success = await sendMessageToTelegram(formattedMessage);
      
      if (success) {
        toast({
          title: "Заявка отправлена",
          description: "Наш менеджер свяжется с вами в ближайшее время",
        });
        
        // Сбрасываем форму
        setFormData({ name: "", phone: "", message: "" });
      } else {
        throw new Error("Не удалось отправить заявку");
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.",
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
          Нажимая кнопку "Отправить заявку", вы соглашаетесь с{" "}
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
