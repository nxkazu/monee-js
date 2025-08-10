# Monee API для Node.js

Простая и удобная библиотека для работы с платежами через Monee

## Установка

```bash
npm install monee-api
# или
yarn add monee-api
```
Быстрый старт
```javascript
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
```
