import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SneakerStore } from '../../assets/model/SneakerStore';
import { Observable } from 'rxjs';

@Injectable()
export class StoreService {
  baseUrl:string = "http://localhost:8765/api";

  constructor(private httpClient : HttpClient) {

  }

  get_stores(): Observable<SneakerStore[]> {
    return this.httpClient.get<SneakerStore[]>(this.baseUrl + '/store');
  }
}
