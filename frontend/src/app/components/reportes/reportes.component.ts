import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  pacientes: any[] = [];
  medicos: any[] = [];
  consultas: any[] = [];
  recetas: any[] = [];
  citas: any[] = [];

  tipoReporte = 'pacientes';
  filtro = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.dataService.getAll('pacientes')
      .subscribe({
        next: (res: any) => {
          this.pacientes = res || [];
        },
        error: (err: any) => {
          console.error('ERROR PACIENTES:', err);
        }
      });

    this.dataService.getAll('medicos')
      .subscribe({
        next: (res: any) => {
          this.medicos = res || [];
        },
        error: (err: any) => {
          console.error('ERROR MEDICOS:', err);
        }
      });

    this.dataService.getAll('consultas')
      .subscribe({
        next: (res: any) => {
          this.consultas = res || [];
        },
        error: (err: any) => {
          console.error('ERROR CONSULTAS:', err);
        }
      });

    this.dataService.getAll('recetas')
      .subscribe({
        next: (res: any) => {
          this.recetas = res || [];
        },
        error: (err: any) => {
          console.error('ERROR RECETAS:', err);
        }
      });

    this.dataService.getAll('citas')
      .subscribe({
        next: (res: any) => {
          this.citas = res || [];
        },
        error: (err: any) => {
          console.error('ERROR CITAS:', err);
        }
      });
  }

  get citasPendientes(): any[] {
    return this.citas.filter(
      (x: any) =>
        String(x.ESTADO || '').trim().toUpperCase() === 'PENDIENTE'
    );
  }

  get datosReporte(): any[] {
    let datos: any[] = [];

    if (this.tipoReporte === 'pacientes') {
      datos = this.pacientes;
    }

    if (this.tipoReporte === 'medicos') {
      datos = this.medicos;
    }

    if (this.tipoReporte === 'consultas') {
      datos = this.consultas;
    }

    if (this.tipoReporte === 'recetas') {
      datos = this.recetas;
    }

    if (this.tipoReporte === 'citas') {
      datos = this.citas;
    }

    if (!this.filtro || this.filtro.trim() === '') {
      return datos;
    }

    const texto = this.filtro
      .toLowerCase()
      .trim();

    return datos.filter((item: any) => {
      return Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(texto);
    });
  }

  seleccionarReporte(tipo: string): void {
    this.tipoReporte = tipo;
    this.filtro = '';
  }

  imprimir(): void {
    window.print();
  }

}
