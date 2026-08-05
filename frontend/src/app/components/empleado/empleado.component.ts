import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

import { DataService } from '../../../services/data.service';
import { FilterempleadoPipe } from '../../pipes/filterempleado-pipe';
@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FilterempleadoPipe
  ],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent implements OnInit {

  empleados: any[] = [];

  SexoList: any[] = [];

  EstadoCivilList: any[] = [];

  name = 'Empleados.xlsx';

  filterPost = '';

  user: any = {
    id: null,
    idsexo: '',
    idestadocivil: '',
    nombre: '',
    apellido: '',
    fechacontrato: ''
  };

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getEmpleados();
    this.getDropListSexo();
    this.getDropListEstadoCivil();
  }

  getEmpleados(): void {
    this.dataService.getAll('empleados').subscribe({
      next: (res: any) => {
        this.empleados = [...res];
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('ERROR API EMPLEADOS:', err);
      }
    });
  }

  getDropListSexo(): void {
    this.dataService.getAll('sexos').subscribe({
      next: (res: any) => {
        this.SexoList = [...res];
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('ERROR API SEXOS:', err);
      }
    });
  }

  getDropListEstadoCivil(): void {
    this.dataService.getAll('estadociviles').subscribe({
      next: (res: any) => {
        this.EstadoCivilList = [...res];
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('ERROR API ESTADO CIVIL:', err);
      }
    });
  }

  saveUser(): void {

    const datos = {
      idsexo: this.user.idsexo,
      idestadocivil: this.user.idestadocivil,
      nombre: this.user.nombre,
      apellido: this.user.apellido,
      fechacontrato: this.user.fechacontrato
    };

    if (this.user.id) {

      this.dataService.update(
        this.user.id,
        datos,
        'empleados'
      ).subscribe({
        next: () => {
          this.getEmpleados();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error(err);
        }
      });

    } else {

      this.dataService.save(
        datos,
        'empleados'
      ).subscribe({
        next: () => {
          this.getEmpleados();
          this.limpiarFormulario();
        },
        error: (err: any) => {
          console.error(err);
        }
      });

    }

  }

  editar(emp: any): void {

    this.user = {
      id: emp.ID_EMPLEADO,
      idsexo: emp.ID_SEXO,
      idestadocivil: emp.ID_ESTADOCIVIL,
      nombre: emp.NOMBRES,
      apellido: emp.APELLIDOS,
      fechacontrato: emp.FECHA_CONTRATO
        ? new Date(emp.FECHA_CONTRATO).toISOString().substring(0, 10)
        : ''
    };

    this.cdr.detectChanges();

  }

  eliminar(id: string | number): void {

    this.dataService.delete(id, 'empleados').subscribe({
      next: () => {
        this.getEmpleados();
      },
      error: (err: any) => {
        console.error(err);
      }
    });

  }

  limpiarFormulario(): void {

    this.user = {
      id: null,
      idsexo: '',
      idestadocivil: '',
      nombre: '',
      apellido: '',
      fechacontrato: ''
    };

    this.cdr.detectChanges();

  }

  openPDF(): void {

    const DATA: any = document.getElementById('tabla');

    html2canvas(DATA).then((canvas) => {

      const fileWidth = 208;
      const fileHeight =
        (canvas.height * fileWidth) / canvas.width;

      const FILEURI =
        canvas.toDataURL('image/png');

      const PDF = new jsPDF('p', 'mm', 'a4');

      PDF.addImage(
        FILEURI,
        'PNG',
        0,
        0,
        fileWidth,
        fileHeight
      );

      PDF.save('empleados.pdf');

    });

  }

  exportToExcel(): void {

    const element =
      document.getElementById('tabla');

    const worksheet: XLSX.WorkSheet =
      XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      book,
      worksheet,
      'Empleados'
    );

    XLSX.writeFile(book, this.name);

  }

}
