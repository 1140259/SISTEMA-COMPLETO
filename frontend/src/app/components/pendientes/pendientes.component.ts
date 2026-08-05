import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pendientes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  pendientes: any[] = [];
  todasLasCitas: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.cargarPendientes();
  }

  cargarPendientes(): void {
    this.dataService.getAll('citas')
      .subscribe({
        next: (res: any) => {
          this.todasLasCitas = res || [];

          this.pendientes = this.todasLasCitas.filter(
            (x: any) =>
              String(x.ESTADO || '')
                .trim()
                .toUpperCase() === 'PENDIENTE'
          );
        },
        error: (err: any) => {
          console.error('ERROR PENDIENTES:', err);
          this.todasLasCitas = [];
          this.pendientes = [];
        }
      });
  }

  atender(item: any): void {
    const datos = {
      ID_PACIENTE: item.ID_PACIENTE,
      ID_MEDICO: item.ID_MEDICO,
      FECHA: item.FECHA,
      HORA: item.HORA,
      MOTIVO: item.MOTIVO,
      ESTADO: 'ATENDIDA'
    };

    this.dataService.update(
      item.ID_CITA,
      datos,
      'citas'
    ).subscribe({
      next: () => {
        this.cargarPendientes();
      },
      error: (err: any) => {
        console.error('ERROR ATENDER CITA:', err);
      }
    });
  }

  cancelar(item: any): void {
    const datos = {
      ID_PACIENTE: item.ID_PACIENTE,
      ID_MEDICO: item.ID_MEDICO,
      FECHA: item.FECHA,
      HORA: item.HORA,
      MOTIVO: item.MOTIVO,
      ESTADO: 'CANCELADA'
    };

    this.dataService.update(
      item.ID_CITA,
      datos,
      'citas'
    ).subscribe({
      next: () => {
        this.cargarPendientes();
      },
      error: (err: any) => {
        console.error('ERROR CANCELAR CITA:', err);
      }
    });
  }

}
