/**
 * Модуль для работы с Telegram Bot API
 * Позволяет отправлять сообщения в Telegram через бота
 */

// Константы для API Telegram
const TELEGRAM_BOT_TOKEN = "7484298108:AAGjtqjpZNKz0VJwbKMvUu1QXwyrGJC6psw"; // Токен бота
const TELEGRAM_CHAT_ID = "79032074092"; // ID вашего чата или группы (замените на свой)
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

/**
 * Отправляет сообщение в Telegram
 * @param message Текст сообщения
 * @returns Promise<boolean> - результат отправки (успех/неудача)
 */
export const sendMessageToTelegram = async (
  message: string,
): Promise<boolean> => {
  try {
    console.log("Отправка сообщения в Telegram:", {
      url: TELEGRAM_API_URL,
      chat_id: TELEGRAM_CHAT_ID,
      message: message.substring(0, 50) + "...", // логируем сокращенную версию сообщения
    });

    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML", // Позволяет использовать HTML-теги в сообщении
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Ошибка отправки в Telegram:", data);
      return false;
    }

    console.log("Успешная отправка в Telegram, ответ:", data);
    return true;
  } catch (error) {
    console.error("Ошибка при отправке сообщения в Telegram:", error);
    return false;
  }
};

/**
 * Форматирует данные заказа в HTML-сообщение для Telegram
 * @param name Имя клиента
 * @param phone Телефон клиента
 * @param message Сообщение от клиента (опционально)
 * @returns Отформатированное сообщение с HTML-разметкой
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

  // Формируем сообщение с HTML-разметкой
  let telegramMessage = `
<b>🔔 НОВАЯ ЗАЯВКА НА ЗВОНОК</b>

<b>Дата:</b> ${formattedDate}
<b>Время:</b> ${formattedTime}

<b>👤 Клиент:</b> ${name}
<b>📞 Телефон:</b> ${phone}
`;

  // Добавляем сообщение, если оно есть
  if (message && message.trim()) {
    telegramMessage += `
<b>💬 Сообщение:</b>
${message}
`;
  }

  // Добавляем источник заявки и тег для поиска
  telegramMessage += `
<b>📱 Источник:</b> Сайт (форма заказа звонка)

#новая_заявка #сайт
`;

  return telegramMessage;
};
