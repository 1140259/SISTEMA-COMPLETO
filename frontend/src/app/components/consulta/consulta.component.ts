import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas: any[] = [];
  pacientes: any[] = [];
  medicos: any[] = [];

  filtroConsulta = '';

  consulta: any = {
    ID_CONSULTA: null,
    ID_PACIENTE: '',
    ID_MEDICO: '',
    FECHA: '',
    MOTIVO_CONSULTA: '',
    DIAGNOSTICO: '',
    TRATAMIENTO: '',
    OBSERVACIONES: '',
    ESTADO: 'ACTIVO'
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getConsultas();
    this.getPacientes();
    this.getMedicos();
    this.asignarFechaActual();
  }

  asignarFechaActual(): void {
    const hoy = new Date();
    const fecha = hoy.toISOString().substring(0, 16);
    this.consulta.FECHA = fecha;
  }

  get consultasFiltradas(): any[] {
    if (!this.filtroConsulta || this.filtroConsulta.trim() === '') {
      return this.consultas;
    }

    const filtro = this.filtroConsulta.toLowerCase();

    return this.consultas.filter((c: any) =>
      c.PACIENTE_NOMBRES?.toLowerCase().includes(filtro) ||
      c.PACIENTE_APELLIDOS?.toLowerCase().includes(filtro) ||
      c.MEDICO_NOMBRES?.toLowerCase().includes(filtro) ||
      c.MEDICO_APELLIDOS?.toLowerCase().includes(filtro) ||
      c.ESPECIALIDAD?.toLowerCase().includes(filtro) ||
      c.DIAGNOSTICO?.toLowerCase().includes(filtro)
    );
  }

  getConsultas(): void {
    this.dataService.getAll('consultas')
      .subscribe({
        next: (res: any) => {
          this.consultas = res;
        },
        error: (err: any) => {
          console.error('ERROR CONSULTAS:', err);
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

  saveConsulta(): void {
    const datos = { ...this.consulta };

    delete datos.ID_CONSULTA;

    if (this.consulta.ID_CONSULTA) {
      this.dataService.update(
        this.consulta.ID_CONSULTA,
        datos,
        'consultas'
      ).subscribe({
        next: () => {
          alert('Consulta actualizada correctamente');
          this.getConsultas();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR ACTUALIZAR CONSULTA:', err);
          alert('Error al actualizar consulta');
        }
      });
    } else {
      this.dataService.save(
        datos,
        'consultas'
      ).subscribe({
        next: () => {
          alert('Consulta guardada correctamente');
          this.getConsultas();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR GUARDAR CONSULTA:', err);
          alert('Error al guardar consulta');
        }
      });
    }
  }

  editarConsulta(c: any): void {
    this.consulta = {
      ID_CONSULTA: c.ID_CONSULTA,
      ID_PACIENTE: c.ID_PACIENTE,
      ID_MEDICO: c.ID_MEDICO,
      FECHA: c.FECHA
        ? new Date(c.FECHA).toISOString().substring(0, 16)
        : '',
      MOTIVO_CONSULTA: c.MOTIVO_CONSULTA || '',
      DIAGNOSTICO: c.DIAGNOSTICO || '',
      TRATAMIENTO: c.TRATAMIENTO || '',
      OBSERVACIONES: c.OBSERVACIONES || '',
      ESTADO: c.ESTADO || 'ACTIVO'
    };

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  eliminarConsulta(id: number): void {
    if (!confirm('¿Eliminar consulta médica?')) {
      return;
    }

    this.dataService.delete(id, 'consultas')
      .subscribe({
        next: () => {
          alert('Consulta eliminada correctamente');
          this.getConsultas();
        },
        error: (err: any) => {
          console.error('ERROR ELIMINAR CONSULTA:', err);
          alert('Error al eliminar consulta');
        }
      });
  }

  limpiarFormulario(): void {
    this.consulta = {
      ID_CONSULTA: null,
      ID_PACIENTE: '',
      ID_MEDICO: '',
      FECHA: '',
      MOTIVO_CONSULTA: '',
      DIAGNOSTICO: '',
      TRATAMIENTO: '',
      OBSERVACIONES: '',
      ESTADO: 'ACTIVO'
    };

    this.asignarFechaActual();
  }

}
