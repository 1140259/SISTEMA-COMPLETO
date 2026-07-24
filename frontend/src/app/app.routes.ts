import { Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';

export const routes: Routes = [
  // Redirige la página principal automáticamente a empleados
  {
    path: '',
    redirectTo: 'empleado',
    pathMatch: 'full'
  },
  // Ruta para la tabla de empleados
  {
    path: 'empleado',
    component: EmpleadoComponent
  }
];
