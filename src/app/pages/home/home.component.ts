import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'pmo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  imageUrl: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {
    // Path to your image in Firebase Storage
    const path = 'imgs/sneakers.jpg';

    // Get the download URL
    const ref = this.storage.ref(path);
    this.imageUrl = ref.getDownloadURL();
  }

  ngOnInit(): void {
  }

}
