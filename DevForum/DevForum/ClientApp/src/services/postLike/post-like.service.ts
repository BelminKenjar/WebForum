import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostLikeService {

  constructor(private _http: HttpClient) { }
  PostPostLike(model: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}/PostLike`, model);
  }
}
