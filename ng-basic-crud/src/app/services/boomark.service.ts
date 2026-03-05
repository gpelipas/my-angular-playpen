import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bookmark } from '../models/bookmark.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class BookmarkService {

  private readonly baseApiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.baseApiUrl);
  }

  get(id: any): Observable<Bookmark> {
    return this.http.get<Bookmark>(`${this.baseApiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseApiUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseApiUrl}/${id}`);
  }

  findByName(name: any): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(`${this.baseApiUrl}?name=${name}`);
  }

}
