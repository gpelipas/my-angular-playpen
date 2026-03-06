import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bookmark } from '../models/bookmark.model';
import { WebResponse } from '../models/webresponse.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class BookmarkService {

  private readonly baseApiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<WebResponse> {
    return this.http.get<WebResponse>(this.baseApiUrl);
  }

  get(id: any): Observable<WebResponse> {
    return this.http.get<WebResponse>(`${this.baseApiUrl}/${id}`);
  }

  create(data: any): Observable<WebResponse> {
    return this.http.post<WebResponse>(this.baseApiUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseApiUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseApiUrl}/${id}`);
  }

  findByName(name: any): Observable<WebResponse> {
    return this.http.get<WebResponse>(`${this.baseApiUrl}?name=${name}`);
  }

}
