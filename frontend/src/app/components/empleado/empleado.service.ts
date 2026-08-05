import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiUrl = 'http://localhost:5000/api/';

  constructor(
    private http: HttpClient
  ) { }

  // 1. Obtener todos los empleados
  getEmpleados(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // 2. Agregar nuevo empleado
  addEmpleado(empleado: any): Observable<any> {
    return this.http.post(this.apiUrl, empleado);
  }

  // 3. Actualizar empleado existente
  updateEmpleado(id: number | string, empleado: any): Observable<any> {
    const url = this.apiUrl.endsWith('/') ? `${this.apiUrl}${id}` : `${this.apiUrl}/${id}`;
    return this.http.put(url, empleado);
  }

  // 4. Eliminar empleado
  deleteEmpleado(id: number | string): Observable<any> {
    const url = this.apiUrl.endsWith('/') ? `${this.apiUrl}${id}` : `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}
