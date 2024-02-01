import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "utils";

import {AngularFireModule} from '@angular/fire/compat';

// Firebase configuration
const firebaseConfig = {
  apiKey: "---------",
  authDomain: "soaproject-22ec7.firebaseapp.com",
  projectId: "soaproject-22ec7",
  storageBucket: "soaproject-22ec7.appspot.com",
  messagingSenderId: "855454059531",
  appId: "-----------",
  measurementId: "G-QGLXXJ1D30"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UtilsModule,

    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
