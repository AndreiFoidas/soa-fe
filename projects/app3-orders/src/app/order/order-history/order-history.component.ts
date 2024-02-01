import { Component, OnInit } from '@angular/core';
import { Order } from 'projects/app3-orders/src/assets/model/Order';
import { OrderService } from '../order.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'pmo-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})

export class OrderHistoryComponent implements OnInit {

  orders: Order[]
  total: number = 0;

  constructor(private http: HttpClient, private service: OrderService) {
    service.get_orders().subscribe(data => {
      this.orders = data;
      this.calculateTotalFirebase();
    });
   }

  calculateTotal(): void {
    this.total = this.orders.reduce((acc, order) => acc + order.price, 0);
  }

  calculateTotalFirebase(): void {
    // Extract the numbers from your orders
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    const numbers = this.orders.map(order => order.price);

    // Make the HTTP request to your Cloud Function
    this.http.post<{ sum: number }>('https://---------.cloudfunctions.net/computeSum', { "numbers": numbers }, options)
      .subscribe(result => {
        // Update the total
        this.total = result.sum;
      }, error => {
        console.error(error);
      });
  }

  ngOnInit(): void {
  }

}
