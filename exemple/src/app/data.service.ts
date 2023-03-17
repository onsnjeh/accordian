import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { model } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  // getData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  getItemById(id: number){
    return this.http.get<model>(`http://localhost:3000/posts/${id}`)
  }

}
