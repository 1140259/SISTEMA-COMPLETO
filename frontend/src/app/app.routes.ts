import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CitaComponent } from './components/cita/cita.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicoComponent } from './components/medico/medico.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { HistorialComponent } from './components/historial/historial.component';
import { RecetaComponent } from './components/receta/receta.component';
import { RecetaImprimirComponent } from './components/receta-imprimir/receta-imprimir.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { ReportesComponent } from './components/reportes/reportes.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'empleado',
    component: EmpleadoComponent
  },
  {
    path: 'paciente',
    component: PacienteComponent
  },
  {
    path: 'medico',
    component: MedicoComponent
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'historial/:id',
    component: HistorialComponent
  },
  {
    path: 'receta',
    component: RecetaComponent
  },
  {
    path: 'receta-imprimir/:id',
    component: RecetaImprimirComponent
  },
  {
    path: 'especialidad',
    component: EspecialidadComponent
  },
  {
    path: 'diagnostico',
    component: DiagnosticoComponent
  },
  {
  path: 'cita',
  component: CitaComponent
},
{
  path: 'pendientes',
  component: PendientesComponent
},
{
  path: 'reportes',
  component: ReportesComponent
}
];
