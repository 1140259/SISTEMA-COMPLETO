import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historial: any[] = [];
  pacientes: any[] = [];

  idPaciente: number = 0;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes(): void {
    this.http.get<any[]>(
      'http://localhost:5000/api/pacientes'
    )
    .subscribe({
      next: (res) => {
        this.pacientes = res;
      },
      error: (err) => {
        console.error('ERROR PACIENTES:', err);
      }
    });
  }

  cargarHistorial(): void {
    if (!this.idPaciente) {
      this.historial = [];
      return;
    }

    this.http.get<any[]>(
      `http://localhost:5000/api/historialpaciente/${this.idPaciente}`
    )
    .subscribe({
      next: (res) => {
        this.historial = res;
      },
      error: (err) => {
        console.error('ERROR HISTORIAL:', err);
        this.historial = [];
      }
    });
  }

}
