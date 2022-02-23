import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export const getData = (count: number) =>
  Array.from(Array(count).keys()).map(() => ({
    id: uuidv4(),
    orderNumber: Math.floor(Math.random() * 1000000000),
    customer: faker.internet.email(),
    sla: "Đúng hạn",
    status: "Hoàn tất",
    processingBy: "Nhà bán",
    products: Array.from(Array(Math.floor(Math.random() * 10))).map(() => {
      const price = Math.floor(Math.random() * 1000000);
      const qty = Math.floor(Math.random() * 5);
      return {
        productName: faker.commerce.productName(),
        image: faker.image.food(),
        id: uuidv4(),
        price,
        qty,
        sku: Math.floor(Math.random() * 1000000000),
      };
    }),
  }));
