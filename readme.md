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
    success_url: 'https://SITE.ru/success', // URL для редиректа
    hook_url: 'https://SITE.ru/hook', // URL для уведомлений
    method: 'card', // Метод оплаты, взятый из библиотеки docs.monee.pro
    subtract: 1, // С кого списывать комиссию: 1 - с клиента, 0 - с магазина
    custom_fields: "nickname" // Особое поле, по которому будет платеж связан с заказчиком
  }
);

// 3. Проверка статуса
const status = await monee.order_info(payment.data.order_uuid);
```
