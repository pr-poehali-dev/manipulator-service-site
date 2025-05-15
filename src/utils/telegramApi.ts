
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
