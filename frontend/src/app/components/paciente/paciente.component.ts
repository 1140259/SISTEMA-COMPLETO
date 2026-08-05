import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  pacientes: any[] = [];

  SexoList: any[] = [];
  EstadoCivilList: any[] = [];
  TipoSangreList: any[] = [];

  filtroPaciente = '';

  nombreExcel = 'Pacientes.xlsx';

  paciente: any = {
    ID_PACIENTE: null,
    nro_documento: '',
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
    id_sexo: '',
    id_estadocivil: '',
    id_tiposangre: '',
    telefono: '',
    celular: '',
    correo: '',
    direccion: '',
    peso: '',
    estatura: '',
    alergias: '',
    enfermedades: '',
    medicamentos: '',
    observaciones: '',
    estado: 'ACTIVO'
  };

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPacientes();
    this.getDropListSexo();
    this.getDropListEstadoCivil();
    this.getDropListTipoSangre();
  }

  get pacientesFiltrados(): any[] {
    if (!this.filtroPaciente || this.filtroPaciente.trim() === '') {
      return this.pacientes;
    }

    const filtro = this.filtroPaciente.toLowerCase();

    return this.pacientes.filter((p: any) =>
      p.NRO_DOCUMENTO?.toString().toLowerCase().includes(filtro) ||
      p.NOMBRES?.toLowerCase().includes(filtro) ||
      p.APELLIDOS?.toLowerCase().includes(filtro) ||
      p.TELEFONO?.toString().toLowerCase().includes(filtro) ||
      p.CELULAR?.toString().toLowerCase().includes(filtro) ||
      p.CORREO?.toLowerCase().includes(filtro)
    );
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

  getDropListSexo(): void {
    this.dataService.getAll('sexos')
      .subscribe({
        next: (res: any) => {
          this.SexoList = res.filter(
            (item: any, index: number, self: any[]) =>
              index === self.findIndex(
                (t: any) => t.SEXO === item.SEXO
              )
          );
        },
        error: (err: any) => {
          console.error('ERROR SEXO:', err);
        }
      });
  }

  getDropListEstadoCivil(): void {
    this.dataService.getAll('estadociviles')
      .subscribe({
        next: (res: any) => {
          this.EstadoCivilList = res.filter(
            (item: any, index: number, self: any[]) =>
              index === self.findIndex(
                (t: any) => t.ESTADOCIVIL === item.ESTADOCIVIL
              )
          );
        },
        error: (err: any) => {
          console.error('ERROR ESTADO CIVIL:', err);
        }
      });
  }

  getDropListTipoSangre(): void {
    this.dataService.getAll('tiposangre')
      .subscribe({
        next: (res: any) => {
          this.TipoSangreList = res;
        },
        error: (err: any) => {
          console.error('ERROR TIPO SANGRE:', err);
        }
      });
  }

  calcularIMC(): string {
    const peso = Number(this.paciente.peso);
    const estatura = Number(this.paciente.estatura);

    if (!peso || !estatura || estatura <= 0) {
      return '';
    }

    const imc = peso / (estatura * estatura);
    return imc.toFixed(2);
  }

  clasificacionIMC(): string {
    const imcTexto = this.calcularIMC();

    if (!imcTexto) {
      return '';
    }

    const imc = Number(imcTexto);

    if (imc < 18.5) {
      return 'Bajo peso';
    }

    if (imc >= 18.5 && imc < 25) {
      return 'Normal';
    }

    if (imc >= 25 && imc < 30) {
      return 'Sobrepeso';
    }

    return 'Obesidad';
  }

  savePaciente(): void {
    const datos = { ...this.paciente };

    delete datos.id;
    delete datos.ID_PACIENTE;

    if (this.paciente.ID_PACIENTE) {
      this.dataService.update(
        this.paciente.ID_PACIENTE,
        datos,
        'pacientes'
      ).subscribe({
        next: () => {
          alert('Paciente actualizado correctamente');
          this.getPacientes();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR ACTUALIZAR PACIENTE:', err);
          alert('Error al actualizar paciente');
        }
      });
    } else {
      this.dataService.save(
        datos,
        'pacientes'
      ).subscribe({
        next: () => {
          alert('Paciente guardado correctamente');
          this.getPacientes();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error('ERROR GUARDAR PACIENTE:', err);
          alert('Error al guardar paciente');
        }
      });
    }
  }

  editarPaciente(p: any): void {
    this.paciente = {
      ID_PACIENTE: p.ID_PACIENTE,
      nro_documento: p.NRO_DOCUMENTO || '',
      nombres: p.NOMBRES || '',
      apellidos: p.APELLIDOS || '',
      fecha_nacimiento: p.FECHA_NACIMIENTO
        ? new Date(p.FECHA_NACIMIENTO).toISOString().substring(0, 10)
        : '',
      id_sexo: p.ID_SEXO || '',
      id_estadocivil: p.ID_ESTADOCIVIL || '',
      id_tiposangre: p.ID_TIPOSANGRE || '',
      telefono: p.TELEFONO || '',
      celular: p.CELULAR || '',
      correo: p.CORREO || '',
      direccion: p.DIRECCION || '',
      peso: p.PESO || '',
      estatura: p.ESTATURA || '',
      alergias: p.ALERGIAS || '',
      enfermedades: p.ENFERMEDADES || '',
      medicamentos: p.MEDICAMENTOS || '',
      observaciones: p.OBSERVACIONES || '',
      estado: p.ESTADO || 'ACTIVO'
    };

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  eliminarPaciente(id: string | number): void {
    const confirmar = confirm('¿Está seguro que desea eliminar este paciente?');

    if (!confirmar) {
      return;
    }

    this.dataService.delete(id, 'pacientes')
      .subscribe({
        next: () => {
          alert('Paciente eliminado correctamente');
          this.getPacientes();
        },
        error: (err: any) => {
          console.error('ERROR ELIMINAR PACIENTE:', err);
          alert('Error al eliminar paciente');
        }
      });
  }

  limpiarFormulario(): void {
    this.paciente = {
      ID_PACIENTE: null,
      nro_documento: '',
      nombres: '',
      apellidos: '',
      fecha_nacimiento: '',
      id_sexo: '',
      id_estadocivil: '',
      id_tiposangre: '',
      telefono: '',
      celular: '',
      correo: '',
      direccion: '',
      peso: '',
      estatura: '',
      alergias: '',
      enfermedades: '',
      medicamentos: '',
      observaciones: '',
      estado: 'ACTIVO'
    };
  }

  openPDF(): void {
    const DATA: any = document.getElementById('tablaPacientes');

    if (!DATA) {
      alert('No se encontró la tabla para exportar');
      return;
    }

    html2canvas(DATA).then((canvas) => {
      const fileWidth = 208;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');

      PDF.addImage(
        FILEURI,
        'PNG',
        0,
        0,
        fileWidth,
        fileHeight
      );

      PDF.save('pacientes.pdf');
    });
  }

  exportToExcel(): void {
    const element = document.getElementById('tablaPacientes');

    if (!element) {
      alert('No se encontró la tabla para exportar');
      return;
    }

    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      book,
      worksheet,
      'Pacientes'
    );

    XLSX.writeFile(book, this.nombreExcel);
  }

  verHistorial(paciente: any): void {
    this.router.navigate([
      '/historial',
      paciente.ID_PACIENTE
    ]);
  }

}
