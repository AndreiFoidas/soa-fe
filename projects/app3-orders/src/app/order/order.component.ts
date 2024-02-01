import { Component, OnInit } from '@angular/core';
import { Sneaker } from '../../assets/model/Sneaker';
import { StoreInventory } from '../../assets/model/StoreInventory';
import { OrderService } from './order.service';
import { ActivatedRoute } from '@angular/router'
import { Order } from '../../assets/model/Order';
import {OrderItem} from "../../assets/model/OrderItem";

@Component({
  selector: 'pmo-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  storeInventory: StoreInventory
  price: number

  selectedTab = 0;
  orderComplete = false;
  cart: Sneaker[]
  order: Order

  constructor(private service: OrderService, private route : ActivatedRoute) {
    this.route.params
  	  .subscribe((params : any) => {
        this.service.get_inventory_by_store_id(params['id']).subscribe(data => this.storeInventory = data)
      });

    this.price = 0
    this.cart = []
    this.order = {
      orderId: "",
        name: "",
        phoneNumber: "",
        deliveryAddress: "",
        price: 0,
        emailAddress: "",
        items: []
    }
  }

  ngOnInit(): void {
  }

  addCart(item): void {
    if (!item.isSelected) {
      this.cart.push(item)
      item.isSelected = true
    } else {
      item.isSelected = false
      this.cart = this.cart.filter(c => c !== item)
    }

    this.price = 0
    this.cart.forEach((c) => this.price += c.sneakerPrice)
  }

  sendOrder(): void {
    var orderItems: OrderItem[] = [];

    for (const sneaker of this.cart) {
      // Create a new OrderItem object for each Sneaker
      let orderItem: OrderItem = {
        orderId: null,
        name: sneaker.sneakerName,
        price: sneaker.sneakerPrice,
      };

      orderItems.push(orderItem);
    }

    this.order.items = orderItems;
    this.order.price = this.price;

    console.log('Order details:', this.order);

    this.service.place_order(this.order).subscribe(() => {
    });

    this.orderComplete = true;
  }
  onTypeName(name: any){
    this.order.name = name
  }

  onTypePhoneNumber(phoneNumber: any){
    this.order.phoneNumber = phoneNumber
  }

  onTypeDeliveryAddress(deliveryAddress: any){
    this.order.deliveryAddress = deliveryAddress
  }

  onTypeEmailAddress(emailAddress: any){
    this.order.emailAddress = emailAddress
  }
}
