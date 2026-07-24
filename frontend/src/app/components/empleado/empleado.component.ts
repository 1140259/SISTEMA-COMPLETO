import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { EmpleadoService } from './empleado.service';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit {
  empleados: any[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    console.log('🚀 EL COMPONENTE SE ESTÁ INICIALIZANDO');
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.empleadoService.getEmpleados().subscribe({
      next: (res: any) => {
        console.log('LO QUE RESPONDE EL BACKEND ES:', res);

        if (Array.isArray(res)) {
          this.empleados = res;
        } else if (res && Array.isArray(res.data)) {
          this.empleados = res.data;
        } else if (res && Array.isArray(res.recordset)) {
          this.empleados = res.recordset;
        } else {
          this.empleados = [];
        }
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Error al conectar con la API:', err);
      }
    });
  }

  agregarEmpleado(nuevoEmpleado: any) {
    this.empleadoService.addEmpleado(nuevoEmpleado).subscribe({
      next: (res: any) => {
        console.log('Empleado agregado con éxito', res);
        this.obtenerEmpleados();
      },
      error: (err: any) => {
        console.error('Error al agregar empleado:', err);
      }
    });
  }

  actualizarEmpleado(id: any, empleadoModificado: any) {
    this.empleadoService.updateEmpleado(id, empleadoModificado).subscribe({
      next: (res: any) => {
        console.log('Empleado actualizado con éxito', res);
        this.obtenerEmpleados();
      },
      error: (err: any) => {
        console.error('Error al actualizar empleado:', err);
      }
    });
  }

  eliminar(id: any) {
    if (confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(id).subscribe({
        next: (res: any) => {
          console.log('Empleado eliminado correctamente', res);
          this.obtenerEmpleados();
        },
        error: (err: any) => {
          console.error('Error al eliminar el empleado:', err);
        }
      });
    }
  }
}
