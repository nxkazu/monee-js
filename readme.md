# Monee API для Node.js

Простая и удобная библиотека для работы с платежами через Monee

## Установка

```bash
npm install monee-api
# или
yarn add monee-api
Быстрый старт
javascript
const Monee = require('monee-api');

// 1. Инициализация
const monee = new Monee('ВАШ_SHOP_UUID');

// 2. Создание платежа
const payment = await monee.order_create(
  1500, // Сумма платежа
  'Оплата заказа #42', // Комментарий
  60, // Время жизни платежа в минутах
  {
    success_url: 'https://вашсайт.ru/success', // URL для редиректа
    hook_url: 'https://вашсайт.ru/hook' // URL для уведомлений
  }
);

// 3. Проверка статуса
const status = await monee.order_info(payment.data.order_uuid);
Полная документация
order_create(amount, comment, expire, [options])
Создает новый платеж.

Параметры:

amount - сумма платежа (число)

comment - описание платежа (строка)

expire - время жизни в минутах (число)

options - дополнительные параметры (объект):

success_url - URL для редиректа после оплаты

hook_url - URL для webhook-уведомлений

method - метод оплаты

custom_fields - дополнительные поля

Возвращает:

Объект с данными платежа или строку с ошибкой

order_info(order_id)
Проверяет статус платежа.

Параметры:

order_id - идентификатор платежа

Возвращает:

Объект с информацией о платеже или строку с ошибкой

Обработка ошибок
Все методы возвращают Promise. Для обработки ошибок используйте try/catch:

javascript
try {
  const result = await monee.order_create(...);
  console.log(result);
} catch (error) {
  console.error('Ошибка:', error);
}
