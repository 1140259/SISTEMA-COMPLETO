import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navegacion.component.html'
})
export class NavegacionComponent {
}
