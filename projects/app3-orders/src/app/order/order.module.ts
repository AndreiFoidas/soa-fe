import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./order.component";
import {RouterModule, Routes} from "@angular/router";
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DetailComponent } from './detail/detail.component';
import { OrderService } from './order.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import {AngularFireModule} from "@angular/fire/compat";


const routes: Routes = [
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },
  {
    path: 'stores/:id',
    component: OrderComponent
  }
]

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "----------",
  authDomain: "soa-sum.firebaseapp.com",
  projectId: "soa-sum",
  storageBucket: "soa-sum.appspot.com",
  messagingSenderId: "418347035761",
  appId: "---------"
};

@NgModule({
  declarations: [
    OrderComponent,
    OrderHistoryComponent,
    DetailComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes),

    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    HttpClient,
    OrderService
  ]
})
export class OrderModule { }
