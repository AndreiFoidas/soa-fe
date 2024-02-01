import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UtilsModule} from "utils";
import { OrderService } from './order/order.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule
  ],
  providers:[
    OrderService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
