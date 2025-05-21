
/**
 * Модуль для отправки данных формы на email
 */

// Email получателя
const RECIPIENT_EMAIL = "gruzoperevozki.klin@yandex.ru";

/**
 * Отправляет данные формы на указанный email
 * @param formData Данные формы
 * @returns Promise<boolean> - результат отправки
 */
export const sendFormDataToEmail = async (
  name: string,
  phone: string,
  message: string = "",
): Promise<boolean> => {
  try {
    console.log("Отправка данных формы на email:", {
      to: RECIPIENT_EMAIL,
      subject: "Заказ звонка с сайта",
      name,
      phone,
      message: message || "(не указано)",
    });

    // В реальном проекте здесь был бы запрос к бэкенду для отправки email
    // Для демонстрации используем заглушку, которая всегда возвращает успех
    
    // Имитация задержки отправки
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Логируем результат
    console.log("✅ Успешная отправка данных формы на email:", RECIPIENT_EMAIL);
    
    return true;
  } catch (error) {
    console.error("❌ Ошибка при отправке данных формы на email:", error);
    return false;
  }
};

/**
 * Форматирует данные заказа
 * @param name Имя клиента
 * @param phone Телефон клиента
 * @param message Сообщение от клиента (опционально)
 * @returns Отформатированное сообщение
 */
export const formatOrderMessage = (
  name: string,
  phone: string,
  message?: string,
): string => {
  // Получаем текущую дату и время
  const now = new Date();
  const formattedDate = now.toLocaleDateString("ru-RU");
  const formattedTime = now.toLocaleTimeString("ru-RU");

  // Формируем сообщение
  let orderMessage = `
НОВАЯ ЗАЯВКА НА ЗВОНОК

Дата: ${formattedDate}
Время: ${formattedTime}

Клиент: ${name}
Телефон: ${phone}
`;

  // Добавляем сообщение, если оно есть
  if (message && message.trim()) {
    orderMessage += `
Сообщение:
${message}
`;
  }

  // Добавляем источник заявки
  orderMessage += `
Источник: Сайт (форма заказа звонка)
`;

  return orderMessage;
};
