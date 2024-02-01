import { Component, OnInit } from '@angular/core';
import { SneakerStore } from '../../../assets/model/SneakerStore';
import { ActivatedRoute } from '@angular/router'
import { DetailService } from './details.service';
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'pmo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class StoreDetailComponent implements OnInit {

  store: SneakerStore;
  imageUrl: Observable<string | null>;
  bannerUrl: Observable<string | null>;

  constructor(private route : ActivatedRoute, private service: DetailService, private storage: AngularFireStorage) {
    // Path to your image in Firebase Storage
    const path = 'imgs/red-97.png';
    const bannerPath = 'imgs/sneaker-banner.jpg';

    // Get the download URL
    const ref = this.storage.ref(path);
    const bannerRef = this.storage.ref(bannerPath);
    this.imageUrl = ref.getDownloadURL();
    this.bannerUrl = bannerRef.getDownloadURL();

    this.route.params
  	  .subscribe((params : any) => {
        service.get_store_by_id(params['id']).subscribe(data => this.store = data)
      });
  }

  ngOnInit(): void {
  }

}
