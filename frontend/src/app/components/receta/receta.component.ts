import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  consultas: any[] = [];
  recetas: any[] = [];

  consultaSeleccionada: any = null;

  receta = {
    ID_CONSULTA: '',
    INDICACIONES: '',
    detalles: [] as any[]
  };

  detalle = {
    MEDICAMENTO: '',
    DOSIS: '',
    FRECUENCIA: '',
    DIAS: 0
  };

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.cargarConsultas();
    this.cargarRecetas();
  }

  cargarConsultas(): void {
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

  cargarRecetas(): void {
    this.dataService.getAll('recetas')
      .subscribe({
        next: (res: any) => {
          this.recetas = res;
        },
        error: (err: any) => {
          console.error('ERROR RECETAS:', err);
        }
      });
  }

  seleccionarConsulta(): void {
    this.consultaSeleccionada = this.consultas.find(
      (c: any) => Number(c.ID_CONSULTA) === Number(this.receta.ID_CONSULTA)
    );

    this.receta.INDICACIONES = '';
    this.receta.detalles = [];

    this.detalle = {
      MEDICAMENTO: '',
      DOSIS: '',
      FRECUENCIA: '',
      DIAS: 0
    };
  }

  agregarMedicamento(): void {
    if (!this.detalle.MEDICAMENTO) {
      alert('Ingrese el medicamento');
      return;
    }

    if (!this.detalle.DOSIS) {
      alert('Ingrese la dosis');
      return;
    }

    if (!this.detalle.FRECUENCIA) {
      alert('Ingrese la frecuencia');
      return;
    }

    this.receta.detalles.push({
      MEDICAMENTO: this.detalle.MEDICAMENTO,
      DOSIS: this.detalle.DOSIS,
      FRECUENCIA: this.detalle.FRECUENCIA,
      DIAS: this.detalle.DIAS
    });

    this.detalle = {
      MEDICAMENTO: '',
      DOSIS: '',
      FRECUENCIA: '',
      DIAS: 0
    };
  }

  eliminarMedicamento(index: number): void {
    this.receta.detalles.splice(index, 1);
  }

  guardarReceta(): void {
    if (!this.receta.ID_CONSULTA) {
      alert('Seleccione una consulta médica');
      return;
    }

    if (this.receta.detalles.length === 0) {
      alert('Debe agregar al menos un medicamento');
      return;
    }

    const datos = {
      ID_CONSULTA: Number(this.receta.ID_CONSULTA),
      INDICACIONES: this.receta.INDICACIONES,
      detalles: this.receta.detalles
    };

    this.dataService.save(datos, 'recetas')
      .subscribe({
        next: () => {
          alert('Receta guardada correctamente');

          const imprimir = confirm('¿Desea imprimir la receta médica en PDF?');

          if (imprimir) {
            setTimeout(() => {
              window.print();
            }, 300);
          }

          this.cargarRecetas();
        },
        error: (err: any) => {
          console.error('ERROR GUARDAR RECETA:', err);
          alert('Error al guardar la receta');
        }
      });
  }

  nuevaReceta(): void {
    this.consultaSeleccionada = null;

    this.receta = {
      ID_CONSULTA: '',
      INDICACIONES: '',
      detalles: []
    };

    this.detalle = {
      MEDICAMENTO: '',
      DOSIS: '',
      FRECUENCIA: '',
      DIAS: 0
    };
  }

}
