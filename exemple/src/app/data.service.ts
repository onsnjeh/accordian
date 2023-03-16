import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getItemById(id: number): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(items => items.find(item => item.id === id))
    );
  }

}
