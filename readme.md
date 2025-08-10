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
Полная документация
```bash
order_create(amount, comment, expire, [options])```
Создает новый платеж.

Параметры:

```amount - сумма платежа (число)

comment - описание платежа (строка)

expire - время жизни в минутах (число)

options - дополнительные параметры (объект):

success_url - URL для редиректа после оплаты

hook_url - URL для webhook-уведомлений

method - метод оплаты

custom_fields - дополнительные поля```

Возвращает:

```bash Объект с данными платежа или строку с ошибкой```
