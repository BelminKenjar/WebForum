import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private _http: HttpClient) { }

  GetTopics(): Observable<any> {
    return this._http.get(`${environment.apiUrl}/Topic`);
  }

  PostTopic(model: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}/Topic`, model);
  }
  UpdateTopic(id: any, model: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}/Topic/${id}`, model);
  }
}