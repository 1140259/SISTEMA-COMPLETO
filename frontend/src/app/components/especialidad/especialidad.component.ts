import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-especialidad',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {

  especialidades: any[] = [];

  especialidad: any = {
    ID_ESPECIALIDAD: null,
    ESPECIALIDAD: '',
    ESTADO: 'ACTIVO'
  };

  filtro = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.cargarEspecialidades();
  }

  get especialidadesFiltradas(): any[] {
    if (!this.filtro) {
      return this.especialidades;
    }

    const texto = this.filtro.toLowerCase();

    return this.especialidades.filter((item: any) =>
      (item.ESPECIALIDAD || '').toLowerCase().includes(texto) ||
      (item.ESTADO || '').toLowerCase().includes(texto)
    );
  }

  cargarEspecialidades(): void {
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

  guardarEspecialidad(): void {
    const datos = {
      ESPECIALIDAD: this.especialidad.ESPECIALIDAD,
      ESTADO: this.especialidad.ESTADO
    };

    if (this.especialidad.ID_ESPECIALIDAD) {
      this.dataService.update(
        this.especialidad.ID_ESPECIALIDAD,
        datos,
        'especialidades'
      ).subscribe({
        next: () => {
          alert('Especialidad actualizada correctamente');
          this.cargarEspecialidades();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR ACTUALIZAR:', err);
          alert('Error al actualizar especialidad');
        }
      });
    } else {
      this.dataService.save(
        datos,
        'especialidades'
      ).subscribe({
        next: () => {
          alert('Especialidad guardada correctamente');
          this.cargarEspecialidades();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR GUARDAR:', err);
          alert('Error al guardar especialidad');
        }
      });
    }
  }

  editarEspecialidad(item: any): void {
    this.especialidad = {
      ID_ESPECIALIDAD: item.ID_ESPECIALIDAD,
      ESPECIALIDAD: item.ESPECIALIDAD,
      ESTADO: item.ESTADO || 'ACTIVO'
    };
  }

  eliminarEspecialidad(id: number): void {
    if (!confirm('¿Desea eliminar esta especialidad?')) {
      return;
    }

    this.dataService.delete(id, 'especialidades')
      .subscribe({
        next: () => {
          alert('Especialidad eliminada correctamente');
          this.cargarEspecialidades();
        },
        error: (err: any) => {
          console.error('ERROR ELIMINAR:', err);
          alert('Error al eliminar especialidad');
        }
      });
  }

  limpiarFormulario(): void {
    this.especialidad = {
      ID_ESPECIALIDAD: null,
      ESPECIALIDAD: '',
      ESTADO: 'ACTIVO'
    };
  }

}
