import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URI = 'http://localhost:5000/api/';

  constructor(
    private http: HttpClient
  ) { }

  getAll(route: string): Observable<any> {

    return this.http.get<any>(
      `${this.API_URI}${route}`
    );

  }

  getOne(
    id: string | number,
    route: string
  ): Observable<any> {

    return this.http.get<any>(
      `${this.API_URI}${route}/${id}`
    );

  }

  save(
    item: any,
    route: string
  ): Observable<any> {

    return this.http.post<any>(
      `${this.API_URI}${route}`,
      item
    );

  }

  update(
    id: string | number,
    item: any,
    route: string
  ): Observable<any> {

    return this.http.put<any>(
      `${this.API_URI}${route}/${id}`,
      item
    );

  }

  delete(
    id: string | number,
    route: string
  ): Observable<any> {

    return this.http.delete<any>(
      `${this.API_URI}${route}/${id}`
    );

  }

  getDropListSexo(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.API_URI}sexos`
    );

  }

}
