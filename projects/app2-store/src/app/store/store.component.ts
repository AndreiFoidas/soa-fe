import { Component, OnInit } from '@angular/core';
import { SneakerStore } from '../../assets/model/SneakerStore';
import { StoreService } from './store.service';
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'pmo-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less'],
})
export class StoreComponent implements OnInit {
  showItems = false;
  stores: SneakerStore[] = []
  imageUrl: Observable<string | null>;

  constructor(storeService: StoreService, private storage: AngularFireStorage) {
    // Path to your image in Firebase Storage
    const path = 'imgs/sneaker-store.jpg';

    // Get the download URL
    const ref = this.storage.ref(path);
    this.imageUrl = ref.getDownloadURL();

    storeService.get_stores().subscribe(data => {
      this.stores = data
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showItems = !this.showItems;
    }, 1000);
  }
}
