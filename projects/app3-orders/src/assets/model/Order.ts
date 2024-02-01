import { OrderItem } from "./OrderItem";

export interface Order {
  orderId: string,
  name: string,
  phoneNumber: string,
  deliveryAddress: string,
  price: number,
  emailAddress: string,
  items: OrderItem[]
}
