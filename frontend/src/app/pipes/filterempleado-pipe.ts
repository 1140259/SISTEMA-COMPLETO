import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterempleado',
  standalone: true
})
export class FilterempleadoPipe implements PipeTransform {

  transform(value: any[], arg: string): any[] {

    if (!arg || arg.length < 1) {
      return value;
    }

    const filtro = arg.toLowerCase();

    return value.filter(emp =>
      emp.NOMBRES?.toLowerCase().includes(filtro) ||
      emp.APELLIDOS?.toLowerCase().includes(filtro) ||
      emp.SEXO?.toLowerCase().includes(filtro) ||
      emp.ESTADOCIVIL?.toLowerCase().includes(filtro)
    );

  }

}
