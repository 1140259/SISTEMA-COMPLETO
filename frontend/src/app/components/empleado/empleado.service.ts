import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:5000/api/empleados';

  constructor(private http: HttpClient) { }

  // 1. Obtener todos
  getEmpleados(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // 2. Agregar nuevo
  addEmpleado(empleado: any): Observable<any> {
    return this.http.post(this.apiUrl, empleado);
  }

  // 3. Actualizar existente
  updateEmpleado(id: any, empleado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, empleado);
  }

  // 4. Eliminar
  deleteEmpleado(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
