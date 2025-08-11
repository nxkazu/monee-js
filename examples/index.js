import Monee from "monee-api";

const monee = new Monee('7c3601b0-df43-40a9-94f2-cd4920d0d9b9')

const payment = await monee.order_create(
    1500,
    "test",
    60,
    {
        method: "card",
        subtract: 1
    }
)

const status = await monee.order_info(payment.uuid)

console.log(status)