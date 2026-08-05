import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-diagnostico',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoComponent implements OnInit {

  consultas: any[] = [];
  sugerencias: any[] = [];
  resultado: any = null;
  criterio = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getConsultas();
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

  buscarAutomatico(): void {
    if (!this.criterio || !this.criterio.trim()) {
      this.sugerencias = [];
      this.resultado = null;
      return;
    }

    const filtro = this.criterio.toLowerCase().trim();

    this.sugerencias = this.consultas.filter((x: any) => {
      const nombreCompleto = `${x.PACIENTE_NOMBRES || ''} ${x.PACIENTE_APELLIDOS || ''}`.toLowerCase();
      return nombreCompleto.includes(filtro);
    });
  }

  seleccionarPaciente(item: any): void {
    this.resultado = item;
    this.criterio = `${item.PACIENTE_NOMBRES || ''} ${item.PACIENTE_APELLIDOS || ''}`.trim();
    this.sugerencias = [];
  }

}
