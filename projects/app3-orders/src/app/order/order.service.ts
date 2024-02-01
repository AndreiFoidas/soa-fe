import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreInventory } from '../../assets/model/StoreInventory';
import { Order } from '../../assets/model/Order';
import {tap} from "rxjs/operators";

@Injectable()
export class OrderService {
  baseUrl:string = "http://localhost:8765/api";

  constructor(protected httpClient : HttpClient) {
  }

  get_inventory_by_store_id(id): Observable<StoreInventory> {
    return this.httpClient.get<StoreInventory>(this.baseUrl + `/store/${id}/inventory`)
      .pipe(
        tap((inventory: StoreInventory) => {
          console.log('Retrieved inventory for store ID', id, ':', inventory);
        })
      );
  }

  place_order(order: Order): Observable<void> {
    return this.httpClient.post<void>(this.baseUrl + `/order`, order)
  }

  get_orders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl + `/order`)
      .pipe(
        tap((orders: Order[]) => {
          console.log('Retrieved orders:', orders);
        })
      );
  }

}
