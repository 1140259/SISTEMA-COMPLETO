import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  citas: any[] = [];
  pacientes: any[] = [];
  medicos: any[] = [];

  filtroCita = '';

  cita: any = {
    ID_CITA: null,
    ID_PACIENTE: '',
    ID_MEDICO: '',
    FECHA: '',
    HORA: '',
    MOTIVO: '',
    ESTADO: 'PENDIENTE'
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getCitas();
    this.getPacientes();
    this.getMedicos();
    this.asignarFechaActual();
  }

  asignarFechaActual(): void {
    const hoy = new Date();
    this.cita.FECHA = hoy.toISOString().substring(0, 10);
    this.cita.HORA = '08:00';
  }

  get citasFiltradas(): any[] {
    if (!this.filtroCita || this.filtroCita.trim() === '') {
      return this.citas;
    }

    const filtro = this.filtroCita.toLowerCase();

    return this.citas.filter((c: any) =>
      c.PACIENTE_NOMBRES?.toLowerCase().includes(filtro) ||
      c.PACIENTE_APELLIDOS?.toLowerCase().includes(filtro) ||
      c.MEDICO_NOMBRES?.toLowerCase().includes(filtro) ||
      c.MEDICO_APELLIDOS?.toLowerCase().includes(filtro) ||
      c.MOTIVO?.toLowerCase().includes(filtro) ||
      c.ESTADO?.toLowerCase().includes(filtro)
    );
  }

  getCitas(): void {
    this.dataService.getAll('citas')
      .subscribe({
        next: (res: any) => {
          this.citas = res;
        },
        error: (err: any) => {
          console.error('ERROR CITAS:', err);
        }
      });
  }

  getPacientes(): void {
    this.dataService.getAll('pacientes')
      .subscribe({
        next: (res: any) => {
          this.pacientes = res;
        },
        error: (err: any) => {
          console.error('ERROR PACIENTES:', err);
        }
      });
  }

  getMedicos(): void {
    this.dataService.getAll('medicos')
      .subscribe({
        next: (res: any) => {
          this.medicos = res;
        },
        error: (err: any) => {
          console.error('ERROR MEDICOS:', err);
        }
      });
  }

  saveCita(): void {
    const datos = {
      ...this.cita
    };

    delete datos.ID_CITA;

    if (this.cita.ID_CITA) {
      this.dataService.update(
        this.cita.ID_CITA,
        datos,
        'citas'
      ).subscribe({
        next: () => {
          alert('Cita actualizada correctamente');
          this.getCitas();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR ACTUALIZAR CITA:', err);
          alert('Error al actualizar cita');
        }
      });
    } else {
      this.dataService.save(
        datos,
        'citas'
      ).subscribe({
        next: () => {
          alert('Cita guardada correctamente');
          this.getCitas();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR GUARDAR CITA:', err);
          alert('Error al guardar cita');
        }
      });
    }
  }

  editarCita(c: any): void {
    this.cita = {
      ID_CITA: c.ID_CITA,
      ID_PACIENTE: c.ID_PACIENTE,
      ID_MEDICO: c.ID_MEDICO,
      FECHA: c.FECHA
        ? new Date(c.FECHA).toISOString().substring(0, 10)
        : '',
      HORA: c.HORA || '',
      MOTIVO: c.MOTIVO || '',
      ESTADO: c.ESTADO || 'PENDIENTE'
    };

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  eliminarCita(id: number): void {
    if (!confirm('¿Eliminar cita médica?')) {
      return;
    }

    this.dataService.delete(id, 'citas')
      .subscribe({
        next: () => {
          alert('Cita eliminada correctamente');
          this.getCitas();
        },
        error: (err: any) => {
          console.error('ERROR ELIMINAR CITA:', err);
          alert('Error al eliminar cita');
        }
      });
  }

  limpiarFormulario(): void {
    this.cita = {
      ID_CITA: null,
      ID_PACIENTE: '',
      ID_MEDICO: '',
      FECHA: '',
      HORA: '',
      MOTIVO: '',
      ESTADO: 'PENDIENTE'
    };

    this.asignarFechaActual();
  }

}
