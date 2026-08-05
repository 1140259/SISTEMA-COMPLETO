import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-medico',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];
  especialidades: any[] = [];

  filtroMedico = '';

  medico: any = {
    ID_MEDICO: null,
    CODIGO_MEDICO: '',
    NOMBRES: '',
    APELLIDOS: '',
    ID_ESPECIALIDAD: '',
    TELEFONO: '',
    CORREO: '',
    ESTADO: 'ACTIVO'
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getMedicos();
    this.getEspecialidades();
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

  getEspecialidades(): void {
    this.dataService.getAll('especialidades')
      .subscribe({
        next: (res: any) => {
          this.especialidades = res;
        },
        error: (err: any) => {
          console.error('ERROR ESPECIALIDADES:', err);
        }
      });
  }

  get medicosFiltrados(): any[] {
    if (!this.filtroMedico) {
      return this.medicos;
    }

    const filtro = this.filtroMedico.toLowerCase();

    return this.medicos.filter((m: any) =>
      (m.NOMBRES || '').toLowerCase().includes(filtro) ||
      (m.APELLIDOS || '').toLowerCase().includes(filtro) ||
      (m.CODIGO_MEDICO || '').toLowerCase().includes(filtro) ||
      (m.ESPECIALIDAD || '').toLowerCase().includes(filtro)
    );
  }

  saveMedico(): void {
    const datos = {
      CODIGO_MEDICO: this.medico.CODIGO_MEDICO,
      NOMBRES: this.medico.NOMBRES,
      APELLIDOS: this.medico.APELLIDOS,
      ID_ESPECIALIDAD: this.medico.ID_ESPECIALIDAD,
      TELEFONO: this.medico.TELEFONO,
      CORREO: this.medico.CORREO,
      ESTADO: this.medico.ESTADO
    };

    if (this.medico.ID_MEDICO) {
      this.dataService.update(
        this.medico.ID_MEDICO,
        datos,
        'medicos'
      ).subscribe({
        next: () => {
          this.getMedicos();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR ACTUALIZAR MEDICO:', err);
        }
      });
    } else {
      this.dataService.save(
        datos,
        'medicos'
      ).subscribe({
        next: () => {
          this.getMedicos();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR GUARDAR MEDICO:', err);
        }
      });
    }
  }

  editarMedico(m: any): void {
    this.medico = {
      ID_MEDICO: m.ID_MEDICO,
      CODIGO_MEDICO: m.CODIGO_MEDICO,
      NOMBRES: m.NOMBRES,
      APELLIDOS: m.APELLIDOS,
      ID_ESPECIALIDAD: m.ID_ESPECIALIDAD,
      TELEFONO: m.TELEFONO,
      CORREO: m.CORREO,
      ESTADO: m.ESTADO
    };
  }

  eliminarMedico(id: number): void {
    if (!confirm('¿Eliminar médico?')) {
      return;
    }

    this.dataService.delete(id, 'medicos')
      .subscribe({
        next: () => {
          this.getMedicos();
        },
        error: (err: any) => {
          console.error('ERROR ELIMINAR MEDICO:', err);
        }
      });
  }

  limpiarFormulario(): void {
    this.medico = {
      ID_MEDICO: null,
      CODIGO_MEDICO: '',
      NOMBRES: '',
      APELLIDOS: '',
      ID_ESPECIALIDAD: '',
      TELEFONO: '',
      CORREO: '',
      ESTADO: 'ACTIVO'
    };
  }

}
